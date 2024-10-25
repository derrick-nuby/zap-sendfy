import { handleAxiosError } from "@/utils/errorHandler";
import { axiosInstance } from "./axios";
import { LoginSchemaFormData, UserFormData } from "@/types";

export const createAccount = async (userData: UserFormData) => {
  try {
    const response = await axiosInstance.post('/users', userData);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const loginUser = async (credentials: LoginSchemaFormData) => {
  try {
    const response = await axiosInstance.post('/users/login', credentials);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get('/users/all');
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const modifyUser = async (userId: string, userData: Partial<UserFormData>) => {
  try {
    const response = await axiosInstance.put(`/users/${userId}`, userData);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const response = await axiosInstance.delete(`/users/${userId}`);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.get('/users/logout');
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getSingleUser = async () => {
  try {
    const response = await axiosInstance.get('/users/you');
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};
