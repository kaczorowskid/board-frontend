import { UserOutlined } from '@ant-design/icons';
import { PageWrapper, TileItem } from 'components';
import { useUserStore } from 'stores';
import {
  InfoContainer,
  FormContainer,
  ThemeSwitchContainer
} from './User.styled';
import { ChangePasswordForm, ThemeSwitch, UserDetailsForm } from './components';

export const User = () => {
  const { firstName, lastName } = useUserStore();

  return (
    <PageWrapper
      title={`User - ${firstName} ${lastName}`}
      icon={<UserOutlined />}
    >
      <TileItem>
        <ThemeSwitchContainer>
          <InfoContainer>Theme</InfoContainer>
          <ThemeSwitch />
        </ThemeSwitchContainer>
      </TileItem>
      <TileItem>
        <InfoContainer>Basic Details</InfoContainer>
        <FormContainer>
          <UserDetailsForm />
        </FormContainer>
      </TileItem>
      <TileItem>
        <InfoContainer>Change password</InfoContainer>
        <FormContainer>
          <ChangePasswordForm />
        </FormContainer>
      </TileItem>
    </PageWrapper>
  );
};
