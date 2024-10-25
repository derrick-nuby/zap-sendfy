import { handleAxiosError } from "@/utils/errorHandler";
import { axiosInstance } from "./axios";
import { EmailRequest } from "@/types";

export const sendMail = async (emailRequest: EmailRequest): Promise<any> => {
  try {
    const response = await axiosInstance.post('/sendMail', emailRequest);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    // throw error;
  }
};

export const sendToPredefinedUsers = async (emailRequest: EmailRequest): Promise<any> => {
  try {
    const response = await axiosInstance.post('/sendToPredefinedUsers', emailRequest);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    // throw error;
  }
};
