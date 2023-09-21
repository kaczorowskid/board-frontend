import { Input } from 'antd';
import { SearchWrapper, Title } from './PageWrapper.styled';
import { PageWrapperProps } from './PageWrapper.types';

const { Search } = Input;

export const PageWrapper = ({
  title,
  hasSearchbar,
  children,
  ...props
}: PageWrapperProps) => (
  <>
    <SearchWrapper>
      <Title>{title}</Title>
      {hasSearchbar && <Search {...props} />}
    </SearchWrapper>
    {children}
  </>
);
