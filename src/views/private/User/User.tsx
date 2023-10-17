import { UserOutlined } from '@ant-design/icons';
import { PageWrapper, TileItem } from 'components';
import { useUserStore } from 'stores';
import { InfoContainer, FormContainer } from './User.styled';
import { ChangePasswordForm, UserDetailsForm } from './components';

export const User = () => {
  const { firstName, lastName } = useUserStore();

  return (
    <PageWrapper
      title={`User - ${firstName} ${lastName}`}
      icon={<UserOutlined />}
    >
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
