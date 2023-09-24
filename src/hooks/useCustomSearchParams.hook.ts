import { useSearchParams } from 'react-router-dom';

type UseCustomSearchParams = [
  string | null,
  (value: string) => void,
  () => void
];
export const useCustomSearchParams = (field: string): UseCustomSearchParams => {
  const [searchParams, setSearchParams] = useSearchParams();

  const param = searchParams.get(field);

  const setParam = (value: string) => {
    setSearchParams((params) => {
      params.set(field, value);
      return params;
    });
  };

  const deleteParam = () => {
    setSearchParams((params) => {
      params.delete(field);
      return params;
    });
  };

  return [param, setParam, deleteParam];
};
