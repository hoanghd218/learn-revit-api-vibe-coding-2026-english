'use client';

/**
 * Login Form Component
 * Custom login form using BIMSpeed API
 */

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { GoogleLoginButton } from './google-login-button';

interface LoginFormProps {
    redirectUrl?: string;
    onSuccess?: () => void;
}

export function LoginForm({ redirectUrl = '/courses', onSuccess }: LoginFormProps) {
    const router = useRouter();
    const { login } = useAuth();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const result = await login(userName, password);

        if (result.success) {
            onSuccess?.();
            router.push(redirectUrl);
        } else {
            setError(result.error || 'Login failed');
        }

        setIsLoading(false);
    };

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                        {error}
                    </div>
                )}

                <div className="space-y-2">
                    <Label htmlFor="userName" className="text-gray-400">
                        Email or Username
                    </Label>
                    <Input
                        id="userName"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your email or username"
                        required
                        disabled={isLoading}
                        className="bg-[#1A1A2E] border-[#3A3A5A] text-white placeholder:text-gray-500"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-400">
                        Password
                    </Label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            disabled={isLoading}
                            className="bg-[#1A1A2E] border-[#3A3A5A] text-white placeholder:text-gray-500 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full button-hover-shadow bg-[var(--orange-red-accent)] hover:bg-[var(--orange-red-accent)]/80 text-white"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Signing in...
                        </>
                    ) : (
                        'Sign In'
                    )}
                </Button>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-[#3A3A5A]" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-gray-400">Or continue with</span>
                </div>
            </div>

            <GoogleLoginButton redirectUrl={redirectUrl} />
        </div>
    );
}
