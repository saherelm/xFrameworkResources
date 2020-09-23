import {
  XIconNames,
  XNavigatorListItem,
  toNavigatiorListItem,
} from 'x-framework-components';
import { XPage } from 'x-framework-core';
import { AppResourceIDs } from './app.localization.config';

//
//#region Route Config ...
export enum BaseRoutes {
  Default = '',
  Unknown = '**',
}

export enum HomeRoutes {
  Default = 'home',
  Home = 'home',
  Child = 'child',
}

export enum ThemesRoutes {
  Default = 'themes',
  Themes = 'themes',
  ThemeManager = 'manager',
}

export enum AppRoutes {
  Default = BaseRoutes.Default,
  Home = HomeRoutes.Default,
  Themes = ThemesRoutes.Default,
  Unknown = BaseRoutes.Unknown,
}
//#endregion

//
//#region Page Configs ...
export enum PageName {
  //
  Home = AppRoutes.Home,
  Child = HomeRoutes.Child,

  //
  // Themes ...
  Themes = AppRoutes.Themes,
  ThemeManager = ThemesRoutes.ThemeManager,
}

export type PageNames = keyof typeof PageName;

export type PageNameIdentifier = PageName | PageNames | string;

export type PageIndexType = {
  [key in PageNames]?: XPage;
};

export const PageIndex: PageIndexType = {
  //
  Home: {
    icon: XIconNames.home,
    id: `${PageName.Home}`,
    name: `${PageName.Home}`,
    title: AppResourceIDs.home,
    baseRoute: `${AppRoutes.Home}`,
    route: ['/', `${AppRoutes.Home}`],
    description: AppResourceIDs.home_description,
    childs: [
      //
      // Child ...
      {
        icon: XIconNames.guide,
        id: `${PageName.Child}`,
        name: `${PageName.Child}`,
        title: AppResourceIDs.home_introduction,
        baseRoute: `${HomeRoutes.Child}`,
        description: AppResourceIDs.home_introduction_description,
        route: ['/', `${AppRoutes.Home}`, `${HomeRoutes.Child}`],
      },
    ],
  },

  //
  Themes: {
    icon: XIconNames.color_palette,
    id: `${PageName.Themes}`,
    name: `${PageName.Themes}`,
    title: AppResourceIDs.themes,
    baseRoute: `${AppRoutes.Themes}`,
    route: ['/', `${AppRoutes.Themes}`],
    description: AppResourceIDs.themes_description,
    childs: [
      //
      // ThemeManager ...
      {
        icon: XIconNames.color_palette,
        id: `${PageName.ThemeManager}`,
        name: `${PageName.ThemeManager}`,
        title: AppResourceIDs.theme_manager,
        baseRoute: `${ThemesRoutes.ThemeManager}`,
        description: AppResourceIDs.theme_manager_description,
        route: ['/', `${AppRoutes.Themes}`, `${ThemesRoutes.ThemeManager}`],
      },
    ],
  },
};

//
// a Const of Available Pages ...
export const Pages = {
  //
  Home: PageIndex.Home,
  Child: PageIndex.Home.childs[0],

  //
  Themes: PageIndex.Themes,
  ThemeManager: PageIndex.Themes.childs[0],
};

//
// Navigator Pages ...
export const NavPageItems: XNavigatorListItem[] = [
  //
  //#region Home ...
  {
    ...toNavigatiorListItem(PageIndex.Home),
  },
  //#endregion
];
//#endregion
