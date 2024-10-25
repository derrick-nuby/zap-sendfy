import { AxiosError } from "axios";

export const handleAxiosError = (error: unknown) => {
  if (error instanceof AxiosError) {
    if (error.response) {
      console.error(`Error: ${error.response.data?.message || 'Unknown error'}`);
      console.error(`Status code: ${error.response.status}`);
    } else if (error.request) {
      console.error('No response received from the server.');
    } else {
      console.error('Error in setting up request:', error.message);
    }
  } else {
    console.error('An unexpected error occurred:', error);
  }
};