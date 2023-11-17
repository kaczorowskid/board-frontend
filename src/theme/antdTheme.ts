import { ThemeConfig, theme } from 'antd';
import { ThemeOptions } from 'types';
import { colors } from './colors';

export const antdTheme = (themeOptions: ThemeOptions): ThemeConfig => {
  const isDark = themeOptions === 'dark';

  return {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorBgContainer: isDark ? colors.raisinBlack : colors.white
    },
    components: {
      Calendar: {
        borderRadiusLG: 20,
        borderRadius: 20,
        borderRadiusOuter: 20,
        borderRadiusSM: 20,
        borderRadiusXS: 20
      }
    }
  };
};
