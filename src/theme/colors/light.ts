import { colors } from './colors';
import { ColorsSchema } from './colorsSchema.types';

export const light: ColorsSchema = {
  layout: {
    app: {
      background: colors.ghostWhite
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
        background: colors.antiFlashWhite100,
        border: colors.cultured,
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
        background: colors.white,
        font: colors.black
      }
    },
    user: {
      font: colors.black
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
      background: colors.yankeesBlue,
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
      font: colors.black,
      background: colors.white
    },
    tileItem: {
      background: colors.white,
      font: colors.black
    }
  }
} as const;
