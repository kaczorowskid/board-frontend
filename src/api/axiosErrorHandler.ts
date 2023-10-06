import { AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { message } from 'antd';

type Codes =
  | StatusCodes.BAD_REQUEST
  | StatusCodes.UNAUTHORIZED
  | StatusCodes.FORBIDDEN
  | StatusCodes.NOT_FOUND
  | StatusCodes.CONFLICT;

type Errors = {
  [key in Codes]: string;
};

const errors: Errors = {
  [StatusCodes.BAD_REQUEST]:
    'Invalid request data. Please check your input and try again.',
  [StatusCodes.UNAUTHORIZED]: 'Access denied. Please log in to gain access.',
  [StatusCodes.FORBIDDEN]:
    'You do not have permission to access this page. Please contact the administrator if you believe this is an error.',
  [StatusCodes.NOT_FOUND]:
    'The page you are looking for could not be found. Please make sure the URL is correct or contact us for assistance.',
  [StatusCodes.CONFLICT]:
    'A conflict occurred while trying to save data. Please try again or contact us if the issue persists.'
};

export const axiosErrorHandler = (error: AxiosError) => {
  const { status } = error?.response || {};

  if (status) {
    message.error(errors[status as keyof typeof errors]);
  } else {
    message.error('Connection error');
  }
};
