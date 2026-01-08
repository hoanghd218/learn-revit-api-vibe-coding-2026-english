/**
 * Authentication Types for BIMSpeed API
 */

// User data from API response
export interface User {
    userName: string;
    phone: string | null;
    sn: number;
    email: string;
    fullName: string | null;
    isEmailConfirmed: boolean;
    isPhoneConfirmed: boolean;
    permissions: string[];
    studentExp: string | null;
    // For display
    imageUrl?: string;
    firstName?: string;
    lastName?: string;
}

// Auth tokens
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

// Login request payload
export interface LoginRequest {
    userName: string;
    password: string;
    extraProps?: string;
    ip?: string;
}

// Register request payload
export interface RegisterRequest {
    name: string;
    email: string;
    phone: string;
    password: string;
}

// Google login request payload
export interface GoogleLoginRequest {
    userName: string;
    googleToken: string;
    remoteIpAddress?: string;
}

// API response wrapper
export interface ApiResponse<T> {
    data: T;
    statusCode: number;
    succeeded: boolean;
    code: string;
    message: string;
}

// Login response data
export interface LoginResponseData {
    accessToken: string;
    refreshToken: string;
    user: User;
}

// Auth context state
export interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isLoaded: boolean;
    isSignedIn: boolean;
}

// Auth context actions
export interface AuthActions {
    login: (userName: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (data: RegisterRequest) => Promise<{ success: boolean; error?: string }>;
    loginWithGoogle: (googleToken: string, email: string) => Promise<{ success: boolean; error?: string }>;
    signOut: () => Promise<void>;
}

// Combined auth context type
export type AuthContextType = AuthState & AuthActions;
