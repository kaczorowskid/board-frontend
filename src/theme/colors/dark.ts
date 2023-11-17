import { colors } from './colors';
import { ColorsSchema } from './colorsSchema.types';

export const dark: ColorsSchema = {
  layout: {
    app: {
      background: colors.eerieBlack
    },
    auth: {
      background: {
        base: colors.white,
        primary: colors.white,
        secondary: colors.blueberry
      }
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
  views: {
    board: {
      commentsForm: {
        background: colors.raisinBlack,
        border: colors.white,
        font: colors.darkWhite
      }
    },
    calendar: {
      border: colors.blueberry
    },
    dashboard: {
      calendar: {
        border: colors.blueberry
      },
      dashboardItem: {
        background: colors.raisinBlack,
        font: colors.white
      }
    },
    user: {
      font: colors.white
    },
    common: {
      font: colors.blueberry
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
      hover: colors.black
    },
    dragAndDrop: {
      background: colors.eerieBlack,
      items: {
        background: colors.eerieBlack,
        border: colors.philippineGray,
        font: colors.white
      }
    },
    iconsActivity: {
      font: colors.white
    },
    menu: {
      background: colors.raisinBlack,
      menuItem: {
        active: colors.queenBlue,
        hover: colors.queenBlue
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
      font: colors.darkWhite,
      background: colors.raisinBlack
    },
    tileItem: {
      background: colors.raisinBlack,
      font: colors.darkWhite
    }
  }
} as const;
