import { Switch } from 'antd';
import { useTheme } from 'hooks';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeSwitch = () => {
  const { appTheme, handleChangeTheme } = useTheme();

  return (
    <Switch
      checked={appTheme === 'dark'}
      unCheckedChildren={<FiSun />}
      checkedChildren={<FiMoon />}
      onChange={(data) => {
        if (data) {
          handleChangeTheme('dark');
        } else {
          handleChangeTheme('light');
        }
      }}
    />
  );
};
