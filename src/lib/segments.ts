import { handleAxiosError } from "@/utils/errorHandler";
import { axiosInstance } from "./axios";
import { SegmentFormData, Segment } from "@/types";

export const getAllAppSegments = async (): Promise<Segment[]> => {
  try {
    const response = await axiosInstance.get('/segments/all');
    return response.data.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};

export const getSegments = async (): Promise<Segment[]> => {
  try {
    const response = await axiosInstance.get(`/segments`);
    return response.data.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};

export const getSingleSegment = async (segmentId: string): Promise<Segment> => {
  try {
    const response = await axiosInstance.get(`/segments/${segmentId}`);
    return response.data.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};

export const createSegment = async (segmentData: SegmentFormData): Promise<Segment> => {
  try {
    const response = await axiosInstance.post('/segments', segmentData);
    return response.data.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};

export const updateSegment = async (segmentId: string, segmentData: SegmentFormData): Promise<Segment> => {
  try {
    const response = await axiosInstance.put(`/segments/${segmentId}`, segmentData);
    return response.data.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};

export const deleteSegment = async (segmentId: string): Promise<void> => {
  try {
    const response = await axiosInstance.delete(`/segments/${segmentId}`);
    return response.data.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};
