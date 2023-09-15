import axiosInstance from '../axios/axiosInstance';
import {AxiosResponse} from "axios";


interface User {
    userId: number;
    username: string;
    // Add other properties as needed
}

export interface LoginRequest {
    userId: string,
    pwd: string
}

export interface UserResponse {
    id: number,
    userId: number,
    name: string,
    role: string,
    address: string,
    sex: string,
    telNo: string,
    email: string,
    departmentId: string,
    state: string,
    employeeType: string,
    position: string,
    joinDate: string,
    retireDate: string,
    updatedBy: number,
    createdBy: number,
}

export class AuthUser implements User {
    userId: number;
    username: string;

    constructor(res: UserResponse) {
        this.userId = res.userId
        this.username = res.name
    }

}

export const login = async (request: LoginRequest) => {
    try {
        await axiosInstance.post<UserResponse>(`/api/auth/login`, request);

    } catch (error) {
        throw error;
    }
};

export const getMe = async (): Promise<AuthUser> => {
    try {
        const response: AxiosResponse<UserResponse> = await axiosInstance.get<UserResponse>(`/api/user/me`);

        return new AuthUser(response.data);
    } catch (error) {
        throw error;
    }
}