import { Switch } from 'antd';
import { i18n } from 'utils';
import { Languages } from './Languages.enum';

export const LanguageSwitch = (): JSX.Element => (
  <Switch
    checked={i18n.language === Languages.POLISH}
    unCheckedChildren={'PL'}
    checkedChildren={'US'}
    onChange={() => {
      if (i18n.language === Languages.ENGLISH) {
        i18n.changeLanguage(Languages.POLISH);
      } else {
        i18n.changeLanguage(Languages.ENGLISH);
      }
    }}
  />
);
