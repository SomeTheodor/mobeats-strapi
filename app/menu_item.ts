export interface MenuItem {
    attributes: {
      redireccion: string;
      menu_items: {
        data: {
          attributes: {
            name: string;
          };
        }[];
      };
    };
  }