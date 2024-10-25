import { handleAxiosError } from "@/utils/errorHandler";
import { axiosInstance } from "./axios";
import { LoginFormData, UserFormData } from "@/types";

export const createAccount = async (userData: UserFormData) => {
  try {
    const response = await axiosInstance.post('/user', userData);
    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};

export const loginUser = async (credentials: LoginFormData) => {
  try {
    const response = await axiosInstance.post('/user/login', credentials);
    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get('/user/all');
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const modifyUser = async (userId: string, userData: Partial<UserFormData>) => {
  try {
    const response = await axiosInstance.put(`/user/${userId}`, userData);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const response = await axiosInstance.delete(`/user/${userId}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.get('/user/logout');
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getSingleUser = async () => {
  try {
    const response = await axiosInstance.get('/user/you');
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};
