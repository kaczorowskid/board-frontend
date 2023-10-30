import { useSearchParams } from 'react-router-dom';
import { ObjectParams } from 'types';

type UseCustomSearchParams<T> = {
  params: T;
  setParams: (data: ObjectParams) => void;
  deleteParams: (field?: string) => void;
};

export const useCustomSearchParams = <T>(): UseCustomSearchParams<T> => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.assign(
    {},
    ...[...searchParams.keys()].map((key) => ({
      [key]: searchParams.get(key)
    }))
  );

  const setParams = (data: ObjectParams) => {
    setSearchParams(data);
  };

  const deleteParams = (param?: string) => {
    if (param) {
      setSearchParams((params) => {
        params.delete(param);
        return params;
      });
    } else {
      setSearchParams({});
    }
  };

  return { params, setParams, deleteParams };
};
