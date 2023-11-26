import { Button, Input } from 'antd';
import {
  IconWrapper,
  SearchWrapper,
  Title,
  TitleContainer
} from './PageWrapper.styled';
import { PageWrapperProps } from './PageWrapper.types';

const { Search } = Input;

export const PageWrapper = ({
  title,
  hasSearchbar,
  buttonName,
  buttonClick,
  icon,
  children,
  ...props
}: PageWrapperProps): JSX.Element => (
  <>
    <SearchWrapper>
      <TitleContainer>
        <IconWrapper>{icon}</IconWrapper>
        <Title>{title}</Title>
      </TitleContainer>
      {hasSearchbar && <Search {...props} />}
      {buttonName && <Button onClick={buttonClick}>{buttonName}</Button>}
    </SearchWrapper>
    {children}
  </>
);
