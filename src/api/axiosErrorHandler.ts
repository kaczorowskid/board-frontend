import { AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { message } from 'antd';

interface ErrorMap {
  code: number;
  message: string;
}

const errorMap: ErrorMap[] = [
  {
    code: StatusCodes.BAD_REQUEST,
    message: 'Invalid request data. Please check your input and try again.'
  },
  {
    code: StatusCodes.UNAUTHORIZED,
    message: 'Access denied. Please log in to gain access.'
  },
  {
    code: StatusCodes.FORBIDDEN,
    message:
      'You do not have permission to access this page. Please contact the administrator if you believe this is an error.'
  },
  {
    code: StatusCodes.NOT_FOUND,
    message:
      'The page you are looking for could not be found. Please make sure the URL is correct or contact us for assistance.'
  },
  {
    code: StatusCodes.CONFLICT,
    message:
      'A conflict occurred while trying to save data. Please try again or contact us if the issue persists.'
  }
];

export const axiosErrorHandler = (error: AxiosError) => {
  const { status } = error?.response || {};

  if (status) {
    message.error(errorMap.find((error) => error.code === status)?.message);
  }

  if (!status) {
    message.error('Connection error');
  }
};
