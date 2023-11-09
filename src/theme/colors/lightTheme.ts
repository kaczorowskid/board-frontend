import { colors } from './colors';

export const lightTheme = {
  layout: {
    app: {
      background: colors.ghostWhite
    }
  },
  errors: {
    fallbackComponent: {
      border: colors.cultured
    },
    page404: {
      font: colors.black
    }
  },
  components: {
    common: {
      button: {
        background: {
          primary: colors.blueberry
        },
        font: colors.white,
        hover: colors.royalBlue
      }
    },
    dropdown: {
      border: colors.antiFlashWhite,
      hover: colors.cultured
    },
    dragAndDrop: {
      background: colors.white,
      items: {
        background: colors.white,
        border: colors.cultured,
        font: colors.black
      }
    },
    iconsActivity: {
      font: colors.black
    },
    menu: {
      backround: colors.raisinBlack,
      menuItem: {
        active: colors.queenBlue,
        hovered: colors.queenBlue
      },
      font: colors.white
    },
    userInfo: {
      name: {
        font: colors.white
      },
      email: {
        font: colors.silver
      }
    },
    pageWrapper: {
      font: colors.black,
      background: colors.white
    },
    tileItem: {
      background: colors.white,
      font: colors.black
    }
  }
};
