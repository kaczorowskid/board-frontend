export interface ColorsSchema {
  layout: {
    app: {
      background: string;
    };
    auth: {
      background: {
        base: string;
        primary: string;
        secondary: string;
      };
    };
  };
  errors: {
    fallbackComponent: {
      border: string;
    };
    page404: {
      font: string;
    };
  };
  views: {
    board: {
      commentsForm: {
        background: string;
        border: string;
      };
    };
    calendar: {
      border: string;
    };
    dashboard: {
      calendar: {
        border: string;
      };
      dashboardItem: {
        background: string;
        font: string;
      };
    };
    user: {
      font: string;
    };
    common: {
      font: string;
    };
  };
  components: {
    common: {
      button: {
        background: {
          primary: string;
        };
        font: string;
        hover: string;
      };
    };
    dropdown: {
      border: string;
      hover: string;
    };
    dragAndDrop: {
      background: string;
      items: {
        background: string;
        border: string;
        font: string;
      };
    };
    iconsActivity: {
      font: string;
    };
    menu: {
      background: string;
      menuItem: {
        active: string;
        hover: string;
      };
      font: string;
    };
    userInfo: {
      name: {
        font: string;
      };
      email: {
        font: string;
      };
    };
    pageWrapper: {
      font: string;
      background: string;
    };
    tileItem: {
      background: string;
      font: string;
    };
  };
}
