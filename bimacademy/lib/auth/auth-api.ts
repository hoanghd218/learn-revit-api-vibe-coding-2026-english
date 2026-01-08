/**
 * BIMSpeed Authentication API Functions
 */

import type {
    LoginRequest,
    RegisterRequest,
    GoogleLoginRequest,
    ApiResponse,
    LoginResponseData,
} from './auth-types';

const API_BASE_URL = 'https://api.bimspeed.net/v1/api';

/**
 * Login with username/email and password
 */
export async function login(
    userName: string,
    password: string
): Promise<ApiResponse<LoginResponseData>> {
    const payload: LoginRequest = {
        userName,
        password,
        extraProps: '',
        ip: '',
    };

    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data as ApiResponse<LoginResponseData>;
}

/**
 * Register a new user
 */
export async function register(
    data: RegisterRequest
): Promise<ApiResponse<null>> {
    const response = await fetch(`${API_BASE_URL}/CustomUser/register`, {
        method: 'POST',
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    return result as ApiResponse<null>;
}

/**
 * Login with Google OAuth token
 */
export async function loginWithGoogle(
    googleToken: string,
    userName: string
): Promise<ApiResponse<LoginResponseData>> {
    const payload: GoogleLoginRequest = {
        userName,
        googleToken,
        remoteIpAddress: '',
    };

    const response = await fetch(`${API_BASE_URL}/auth/login-google`, {
        method: 'POST',
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data as ApiResponse<LoginResponseData>;
}
