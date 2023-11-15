import { ThemeConfig, theme } from 'antd';
import { ThemeOptions } from 'types';
import { colors } from './colors';
// import { theme } from './theme';

// export const antdTheme = (themeOptions: ThemeOptions): ThemeConfig => ({
//   algorithm:
//     themeOptions === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
//   token: {
//     colorText: theme(themeOptions).colors.font.base,
//     colorTextPlaceholder: theme(themeOptions).colors.font.placeholder,
//     colorBgContainer: theme(themeOptions).colors.background.tile,
//     colorBgElevated: theme(themeOptions).colors.background.tile,
//     colorBgSpotlight: theme(themeOptions).colors.background.tile
//   }
//   // components: {
//   //   Table: {
//   //     headerBg: theme(themeOptions).colors.background.tile
//   //   },
//   //   Tooltip: {
//   //     boxShadowSecondary: theme(themeOptions).colors.boxShadow.base
//   //   },
//   //   Dropdown: {
//   //     controlItemBgHover: theme(themeOptions).colors.hover.base
//   //   },
//   //   Select: {
//   //     optionActiveBg: theme(themeOptions).colors.hover.base,
//   //     optionSelectedBg: theme(themeOptions).colors.hover.base
//   //   },
//   //   Calendar: {
//   //     itemActiveBg: theme(themeOptions).colors.hover.base,
//   //     colorPrimary: theme(themeOptions).colors.font.base
//   //   },
//   //   Modal: {
//   //     zIndexPopupBase: 1001
//   //   }
//   // }
// });

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
