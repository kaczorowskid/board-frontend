import { UserOutlined } from '@ant-design/icons';
import { PageWrapper, TileItem } from 'components';
import { useUserStore } from 'stores';
import { useTranslation } from 'react-i18next';
import {
  InfoContainer,
  FormContainer,
  ThemeSwitchContainer
} from './User.styled';
import { ChangePasswordForm, ThemeSwitch, UserDetailsForm } from './components';
import { LanguageSwitch } from './components/LanguageSwitch';

export const User = (): JSX.Element => {
  const { firstName, lastName } = useUserStore();
  const { t } = useTranslation();

  return (
    <PageWrapper
      title={`${t('private.user.user')} - ${firstName} ${lastName}`}
      icon={<UserOutlined />}
    >
      <TileItem>
        <ThemeSwitchContainer>
          <InfoContainer>{t('private.user.theme')}</InfoContainer>
          <ThemeSwitch />
        </ThemeSwitchContainer>
      </TileItem>
      <TileItem>
        <ThemeSwitchContainer>
          <InfoContainer>{t('private.user.language')}</InfoContainer>
          <LanguageSwitch />
        </ThemeSwitchContainer>
      </TileItem>
      <TileItem>
        <InfoContainer>{t('private.user.basic-details')}</InfoContainer>
        <FormContainer>
          <UserDetailsForm />
        </FormContainer>
      </TileItem>
      <TileItem>
        <InfoContainer>{t('private.user.change-password')}</InfoContainer>
        <FormContainer>
          <ChangePasswordForm />
        </FormContainer>
      </TileItem>
    </PageWrapper>
  );
};
