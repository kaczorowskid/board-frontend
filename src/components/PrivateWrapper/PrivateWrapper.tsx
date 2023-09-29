import { useAuthorizeUser } from './PrivateWrapper.hook';
import { PrivateWrapperProps } from './PrivateWrapper.types';

export const PrivateWrapper = ({ children }: PrivateWrapperProps) => {
  const { data } = useAuthorizeUser();

  return data ? <>{children}</> : null;
};
