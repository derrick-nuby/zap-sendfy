import { handleAxiosError } from "@/utils/errorHandler";
import { axiosInstance } from "./axios";
import { SmtpFormData } from "@/types";

export const getAllSmtps = async () => {
  try {
    const response = await axiosInstance.get('/smtps');
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getUserSmtps = async () => {
  try {
    const response = await axiosInstance.get('/smtps/user');
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getSingleSmtp = async (smtpId: string) => {
  try {
    const response = await axiosInstance.get(`/smtps/${smtpId}`);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const createSmtp = async (smtpData: SmtpFormData) => {
  try {
    const response = await axiosInstance.post('/smtps', smtpData);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const updateSmtp = async (smtpId: string, smtpData: Partial<SmtpFormData>) => {
  try {
    const response = await axiosInstance.put(`/smtps/${smtpId}`, smtpData);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const deleteSmtp = async (smtpId: string) => {
  try {
    const response = await axiosInstance.delete(`/smtps/${smtpId}`);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const sendSmtpVerification = async (smtpId: string, email: string) => {
  try {
    const response = await axiosInstance.post(`/sendVerification`, { smtpId, email });
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};
