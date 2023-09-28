import { useAuthorization } from './Root.hook';

export const Root = () => {
  useAuthorization();

  return null;
};
