import { ThemeConfig } from 'antd';
import { ThemeOptions } from 'types';
import { theme } from './theme';

export const antdTheme = (themeOptions: ThemeOptions): ThemeConfig => ({
  token: {
    colorText: theme(themeOptions).colors.font.base,
    colorTextPlaceholder: theme(themeOptions).colors.font.placeholder,
    colorBgContainer: theme(themeOptions).colors.background.tile,
    colorBgElevated: theme(themeOptions).colors.background.tile,
    colorBgSpotlight: theme(themeOptions).colors.background.tile
  },
  components: {
    Table: {
      headerBg: theme(themeOptions).colors.background.tile
    },
    Tooltip: {
      boxShadowSecondary: theme(themeOptions).colors.boxShadow.base
    },
    Dropdown: {
      controlItemBgHover: theme(themeOptions).colors.hover.base
    },
    Select: {
      optionActiveBg: theme(themeOptions).colors.hover.base,
      optionSelectedBg: theme(themeOptions).colors.hover.base
    },
    Calendar: {
      itemActiveBg: theme(themeOptions).colors.hover.base,
      colorPrimary: theme(themeOptions).colors.font.base
    },
    Modal: {
      zIndexPopupBase: 1001
    }
  }
});
