'use client';

/**
 * Register Form Component
 * Custom registration form using BIMSpeed API
 */

import { useState } from 'react';
import { useAuth } from '@/lib/auth/auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react';
import { GoogleLoginButton } from './google-login-button';

interface RegisterFormProps {
    onSuccess?: () => void;
    onSwitchToLogin?: () => void;
}

export function RegisterForm({ onSuccess, onSwitchToLogin }: RegisterFormProps) {
    const { register, login } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const result = await register({ name, email, phone, password });

        if (result.success) {
            setSuccess(true);
            // Auto-login after successful registration
            const loginResult = await login(email, password);
            if (loginResult.success) {
                onSuccess?.();
            } else {
                // Registration successful but auto-login failed, prompt to login manually
                setTimeout(() => {
                    onSwitchToLogin?.();
                }, 2000);
            }
        } else {
            setError(result.error || 'Registration failed');
        }

        setIsLoading(false);
    };

    if (success) {
        return (
            <div className="py-8 text-center space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                    <CheckCircle className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                    <p className="text-lg font-semibold text-white">Registration Successful!</p>
                    <p className="text-sm text-gray-400">
                        Logging you in...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                        {error}
                    </div>
                )}

                <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-400">
                        Full Name
                    </Label>
                    <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                        disabled={isLoading}
                        className="bg-[#1A1A2E] border-[#3A3A5A] text-white placeholder:text-gray-500"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-400">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        disabled={isLoading}
                        className="bg-[#1A1A2E] border-[#3A3A5A] text-white placeholder:text-gray-500"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-400">
                        Phone Number
                    </Label>
                    <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
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
                            placeholder="Create a password"
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
                            Creating account...
                        </>
                    ) : (
                        'Create Account'
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

            <GoogleLoginButton redirectUrl="/courses" />
        </div>
    );
}
