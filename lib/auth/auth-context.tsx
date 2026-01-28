'use client';

/**
 * Authentication Context Provider
 * Manages auth state, token storage, and auth operations
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { User, AuthContextType, RegisterRequest } from './auth-types';
import * as authApi from './auth-api';
import Cookies from 'js-cookie';

// Storage keys
const STORAGE_KEYS = {
    ACCESS_TOKEN: 'bimspeed_access_token',
    REFRESH_TOKEN: 'bimspeed_refresh_token',
    USER: 'bimspeed_user',
} as const;

// Default context value
const defaultContext: AuthContextType = {
    user: null,
    accessToken: null,
    refreshToken: null,
    isLoaded: false,
    isSignedIn: false,
    login: async () => ({ success: false, error: 'Not initialized' }),
    register: async () => ({ success: false, error: 'Not initialized' }),
    loginWithGoogle: async () => ({ success: false, error: 'Not initialized' }),
    signOut: async () => { },
};

const AuthContext = createContext<AuthContextType>(defaultContext);

interface AuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load auth state from storage on mount
    useEffect(() => {
        const loadAuthState = () => {
            try {
                const storedAccessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
                const storedRefreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
                const storedUser = localStorage.getItem(STORAGE_KEYS.USER);

                if (storedAccessToken && storedUser) {
                    setAccessToken(storedAccessToken);
                    setRefreshToken(storedRefreshToken);
                    setUser(JSON.parse(storedUser));

                    // Sync cookie if missing but local storage exists
                    if (!Cookies.get('bimspeed_auth_token')) {
                        Cookies.set('bimspeed_auth_token', storedAccessToken, { expires: 30, path: '/' });
                    }
                }
            } catch (error) {
                console.error('Error loading auth state:', error);
                // Clear corrupted data
                localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
                localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
                localStorage.removeItem(STORAGE_KEYS.USER);
                Cookies.remove('bimspeed_auth_token', { path: '/' });
            } finally {
                setIsLoaded(true);
            }
        };

        loadAuthState();
    }, []);

    // Save auth state to storage
    const saveAuthState = useCallback((tokens: { accessToken: string; refreshToken: string }, userData: User) => {
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, tokens.accessToken);
        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, tokens.refreshToken);
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));

        // Set cookie for middleware
        Cookies.set('bimspeed_auth_token', tokens.accessToken, { expires: 30, path: '/' });

        setAccessToken(tokens.accessToken);
        setRefreshToken(tokens.refreshToken);
        setUser(userData);
    }, []);

    // Clear auth state
    const clearAuthState = useCallback(() => {
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.USER);

        // Remove cookie
        Cookies.remove('bimspeed_auth_token', { path: '/' });

        setAccessToken(null);
        setRefreshToken(null);
        setUser(null);
    }, []);

    // Login with username/password
    const login = useCallback(async (userName: string, password: string) => {
        try {
            const response = await authApi.login(userName, password);

            if (response.succeeded && response.data) {
                const userData: User = {
                    ...response.data.user,
                    // Parse name for display
                    firstName: response.data.user.fullName?.split(' ')[0] || response.data.user.userName,
                    lastName: response.data.user.fullName?.split(' ').slice(1).join(' ') || '',
                };

                saveAuthState(
                    { accessToken: response.data.accessToken, refreshToken: response.data.refreshToken },
                    userData
                );

                return { success: true };
            }

            return { success: false, error: response.message || 'Login failed' };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'Network error. Please try again.' };
        }
    }, [saveAuthState]);

    // Register new user
    const register = useCallback(async (data: RegisterRequest) => {
        try {
            const response = await authApi.register(data);

            if (response.succeeded) {
                return { success: true };
            }

            return { success: false, error: response.message || 'Registration failed' };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, error: 'Network error. Please try again.' };
        }
    }, []);

    // Login with Google
    const loginWithGoogle = useCallback(async (googleToken: string, email: string) => {
        try {
            const response = await authApi.loginWithGoogle(googleToken, email);

            if (response.succeeded && response.data) {
                const userData: User = {
                    ...response.data.user,
                    firstName: response.data.user.fullName?.split(' ')[0] || response.data.user.userName,
                    lastName: response.data.user.fullName?.split(' ').slice(1).join(' ') || '',
                };

                saveAuthState(
                    { accessToken: response.data.accessToken, refreshToken: response.data.refreshToken },
                    userData
                );

                return { success: true };
            }

            return { success: false, error: response.message || 'Google login failed' };
        } catch (error) {
            console.error('Google login error:', error);
            return { success: false, error: 'Network error. Please try again.' };
        }
    }, [saveAuthState]);

    // Sign out
    const signOut = useCallback(async () => {
        clearAuthState();
    }, [clearAuthState]);

    const value: AuthContextType = {
        user,
        accessToken,
        refreshToken,
        isLoaded,
        isSignedIn: !!accessToken && !!user,
        login,
        register,
        loginWithGoogle,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook for consuming auth context
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

// Hook that mimics Clerk's useUser
export function useUser() {
    const { user, isLoaded } = useAuth();
    return { user, isLoaded };
}
