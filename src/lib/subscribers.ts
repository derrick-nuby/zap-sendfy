import { handleAxiosError } from "@/utils/errorHandler";
import { axiosInstance } from "./axios";
import { SubscriberFormData, Subscriber, ChangeSegmentFormData, SubscriberBulkDeleteFormData } from "@/types";

export const getSubscribers = async (): Promise<Subscriber[]> => {
  try {
    const response = await axiosInstance.get('/subscribers');
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getAllAppSubscribers = async (): Promise<Subscriber[]> => {
  try {
    const response = await axiosInstance.get('/subscribers/all');
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getSubscribersBySegment = async (segmentId: string): Promise<Subscriber[]> => {
  try {
    const response = await axiosInstance.get(`/subscribers/segment/${segmentId}`);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const searchSubscriber = async (query: string): Promise<Subscriber[]> => {
  try {
    const response = await axiosInstance.get(`/subscribers/search`, { params: { q: query } });
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const changeSubscriberSegment = async (ChangeSegmentData: ChangeSegmentFormData): Promise<any> => {
  try {
    const response = await axiosInstance.post('/subscribers/change-segment', ChangeSegmentData);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getSingleSubscriber = async (subscriberId: string): Promise<Subscriber> => {
  try {
    const response = await axiosInstance.get(`/subscribers/${subscriberId}`);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const createSubscriber = async (subscriberData: SubscriberFormData): Promise<Subscriber> => {
  try {
    const response = await axiosInstance.post('/subscribers', subscriberData);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const updateSubscriber = async (subscriberId: string, subscriberData: Partial<SubscriberFormData>): Promise<Subscriber> => {
  try {
    const response = await axiosInstance.put(`/subscribers/${subscriberId}`, subscriberData);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const bulkDeleteSubscribers = async (subscriberIds: SubscriberBulkDeleteFormData): Promise<any> => {
  try {
    const response = await axiosInstance.delete('/subscribers/bulk', { data: { subscriberIds } });
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const deleteSubscriber = async (subscriberId: string): Promise<any> => {
  try {
    const response = await axiosInstance.delete(`/subscribers/${subscriberId}`);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const uploadSubscribersByCSV = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axiosInstance.post('/subscribers/file', formData);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const previewUpload = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axiosInstance.post('/subscribers/preview-upload', formData);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};
