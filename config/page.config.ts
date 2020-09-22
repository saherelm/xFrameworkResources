import {
  XIconNames,
  XTabNavigatorItem,
  XNavigatorListItem,
  toTabNavigatiorItem,
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
  Introduction = 'introduction',
}

export enum CoreRoutes {
  Default = 'core',
  Core = 'core',
  Introduction = 'introduction',
}

export enum ServicesRoutes {
  Default = 'services',
  Services = 'services',
  Introduction = 'introduction',
}

export enum ComponentsRoutes {
  Default = 'components',
  Components = 'components',
  Introduction = 'introduction',
  SmallComponents = 'small-components',
  Card = 'card',
  Icon = 'icon',
  Counter = 'counter',
  ColorPicker = 'color-picker',
  Fab = 'fab',
  FileComponents = 'file-components',
  Form = 'form',
  Grid = 'grid',
  List = 'list',
  Map = 'map',
  MarkDown = 'markdown',
  DescriptionList = 'description-list',
  ExpandableList = 'expandable-list',
  ExpandablePanel = 'expandable-panel',
  Slider = 'slider',
  Stepper = 'stepper',
  Tabs = 'tabs',
  Table = 'table',
  Page = 'page',
  TabNavigator = 'tab-navigator',
}

export enum TabsRoutes {
  Default = 'tabs',
  Tabs = 'tabs',
  TabPage1 = 'tab-page-1',
  TabPage2 = 'tab-page-2',
  TabPage3 = 'tab-page-3',
}

export enum ThemesRoutes {
  Default = 'themes',
  Themes = 'themes',
  ThemeManager = 'manager',
}

export enum AppRoutes {
  Default = BaseRoutes.Default,
  Home = HomeRoutes.Default,
  Core = CoreRoutes.Default,
  Services = ServicesRoutes.Default,
  Components = ComponentsRoutes.Default,
  TabsNav = TabsRoutes.Default,
  Themes = ThemesRoutes.Default,
  Unknown = BaseRoutes.Unknown,
}
//#endregion

//
//#region Page Configs ...
export enum PageName {
  //
  // Home ...
  Home = AppRoutes.Home,
  HomeIntoduction = HomeRoutes.Introduction,

  //
  // Core ...
  Core = AppRoutes.Core,
  CoreIntoduction = CoreRoutes.Introduction,

  //
  // Services ...
  Services = AppRoutes.Services,
  ServicesIntoduction = ServicesRoutes.Introduction,

  //
  // Components ...
  Components = AppRoutes.Components,
  ComponentsIntoduction = ComponentsRoutes.Introduction,
  SmallComponents = ComponentsRoutes.SmallComponents,
  Card = ComponentsRoutes.Card,
  Icon = ComponentsRoutes.Icon,
  Counter = ComponentsRoutes.Counter,
  ColorPicker = ComponentsRoutes.ColorPicker,
  Fab = ComponentsRoutes.Fab,
  FileComponents = ComponentsRoutes.FileComponents,
  Form = ComponentsRoutes.Form,
  Grid = ComponentsRoutes.Grid,
  List = ComponentsRoutes.List,
  Map = ComponentsRoutes.Map,
  MarkDown = ComponentsRoutes.MarkDown,
  DescriptionList = ComponentsRoutes.DescriptionList,
  ExpandableList = ComponentsRoutes.ExpandableList,
  ExpandablePanel = ComponentsRoutes.ExpandablePanel,
  Slider = ComponentsRoutes.Slider,
  Stepper = ComponentsRoutes.Stepper,
  Tabs = ComponentsRoutes.Tabs,
  Table = ComponentsRoutes.Table,
  Page = ComponentsRoutes.Page,
  TabNavigator = ComponentsRoutes.TabNavigator,

  //
  // Tabs Navigation ...
  TabsNav = AppRoutes.TabsNav,
  TabPage1 = TabsRoutes.TabPage1,
  TabPage2 = TabsRoutes.TabPage2,
  TabPage3 = TabsRoutes.TabPage3,

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
      // Intoduction ...
      {
        icon: XIconNames.guide,
        id: `${PageName.HomeIntoduction}`,
        name: `${PageName.HomeIntoduction}`,
        title: AppResourceIDs.home_introduction,
        baseRoute: `${HomeRoutes.Introduction}`,
        description: AppResourceIDs.home_introduction_description,
        route: ['/', `${AppRoutes.Home}`, `${HomeRoutes.Introduction}`],
      },
    ],
  },

  //
  Core: {
    icon: XIconNames.event,
    id: `${PageName.Core}`,
    name: `${PageName.Core}`,
    title: AppResourceIDs.core,
    baseRoute: `${AppRoutes.Core}`,
    route: ['/', `${AppRoutes.Core}`],
    description: AppResourceIDs.core_description,
    childs: [
      //
      // Intoduction ...
      {
        icon: XIconNames.guide,
        id: `${PageName.CoreIntoduction}`,
        name: `${PageName.CoreIntoduction}`,
        title: AppResourceIDs.core_introduction,
        baseRoute: `${CoreRoutes.Introduction}`,
        description: AppResourceIDs.core_introduction_description,
        route: ['/', `${AppRoutes.Core}`, `${CoreRoutes.Introduction}`],
      },
    ],
  },

  //
  Services: {
    icon: XIconNames.job,
    id: `${PageName.Services}`,
    name: `${PageName.Services}`,
    title: AppResourceIDs.services,
    baseRoute: `${AppRoutes.Services}`,
    route: ['/', `${AppRoutes.Services}`],
    description: AppResourceIDs.services_description,
    childs: [
      //
      // Intoduction ...
      {
        icon: XIconNames.guide,
        id: `${PageName.ServicesIntoduction}`,
        name: `${PageName.ServicesIntoduction}`,
        title: AppResourceIDs.services_introduction,
        baseRoute: `${ServicesRoutes.Introduction}`,
        description: AppResourceIDs.services_introduction_description,
        route: ['/', `${AppRoutes.Services}`, `${ServicesRoutes.Introduction}`],
      },
    ],
  },

  //
  Components: {
    icon: XIconNames.explorer,
    id: `${PageName.Components}`,
    name: `${PageName.Components}`,
    title: AppResourceIDs.components,
    baseRoute: `${AppRoutes.Components}`,
    route: ['/', `${AppRoutes.Components}`],
    description: AppResourceIDs.components_description,
    childs: [
      //
      // Intoduction ...
      {
        icon: XIconNames.guide,
        id: `${PageName.ComponentsIntoduction}`,
        name: `${PageName.ComponentsIntoduction}`,
        title: AppResourceIDs.components_introduction,
        baseRoute: `${ComponentsRoutes.Introduction}`,
        description: AppResourceIDs.components_introduction_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.Introduction}`,
        ],
      },
      //
      // SmallComponents ...
      {
        icon: XIconNames.list,
        id: `${PageName.SmallComponents}`,
        name: `${PageName.SmallComponents}`,
        title: AppResourceIDs.small_components,
        baseRoute: `${ComponentsRoutes.SmallComponents}`,
        description: AppResourceIDs.small_components_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.SmallComponents}`,
        ],
      },
      //
      // Card ...
      {
        icon: XIconNames.list,
        id: `${PageName.Card}`,
        name: `${PageName.Card}`,
        title: AppResourceIDs.card,
        baseRoute: `${ComponentsRoutes.Card}`,
        description: AppResourceIDs.card_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Card}`],
      },
      //
      // Icon ...
      {
        icon: XIconNames.list,
        id: `${PageName.Icon}`,
        name: `${PageName.Icon}`,
        title: AppResourceIDs.icon,
        baseRoute: `${ComponentsRoutes.Icon}`,
        description: AppResourceIDs.icon_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Icon}`],
      },
      //
      // Counter ...
      {
        icon: XIconNames.list,
        id: `${PageName.Counter}`,
        name: `${PageName.Counter}`,
        title: AppResourceIDs.counter,
        baseRoute: `${ComponentsRoutes.Counter}`,
        description: AppResourceIDs.counter_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Counter}`],
      },
      //
      // ColorPicker ...
      {
        icon: XIconNames.list,
        id: `${PageName.ColorPicker}`,
        name: `${PageName.ColorPicker}`,
        title: AppResourceIDs.color_picker,
        baseRoute: `${ComponentsRoutes.ColorPicker}`,
        description: AppResourceIDs.color_picker_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.ColorPicker}`,
        ],
      },
      //
      // Fab ...
      {
        id: `${PageName.Fab}`,
        icon: XIconNames.list,
        name: `${PageName.Fab}`,
        title: AppResourceIDs.fab,
        baseRoute: `${ComponentsRoutes.Fab}`,
        description: AppResourceIDs.fab_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Fab}`],
      },
      //
      // FileComponents ...
      {
        icon: XIconNames.list,
        id: `${PageName.FileComponents}`,
        name: `${PageName.FileComponents}`,
        title: AppResourceIDs.file_components,
        baseRoute: `${ComponentsRoutes.FileComponents}`,
        description: AppResourceIDs.file_components_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.FileComponents}`,
        ],
      },
      //
      // Form ...
      {
        icon: XIconNames.list,
        id: `${PageName.Form}`,
        name: `${PageName.Form}`,
        title: AppResourceIDs.form,
        baseRoute: `${ComponentsRoutes.Form}`,
        description: AppResourceIDs.form_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Form}`],
      },
      //
      // Grid ...
      {
        icon: XIconNames.list,
        id: `${PageName.Grid}`,
        name: `${PageName.Grid}`,
        title: AppResourceIDs.grid,
        baseRoute: `${ComponentsRoutes.Grid}`,
        description: AppResourceIDs.grid_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Grid}`],
      },
      //
      // List ...
      {
        icon: XIconNames.list,
        id: `${PageName.List}`,
        name: `${PageName.List}`,
        title: AppResourceIDs.list,
        baseRoute: `${ComponentsRoutes.List}`,
        description: AppResourceIDs.list_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.List}`],
      },
      //
      // Map ...
      {
        icon: XIconNames.list,
        id: `${PageName.Map}`,
        name: `${PageName.Map}`,
        title: AppResourceIDs.map,
        baseRoute: `${ComponentsRoutes.Map}`,
        description: AppResourceIDs.map_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Map}`],
      },
      //
      // MarkDown ...
      {
        icon: XIconNames.list,
        id: `${PageName.MarkDown}`,
        name: `${PageName.MarkDown}`,
        title: AppResourceIDs.markdown,
        baseRoute: `${ComponentsRoutes.MarkDown}`,
        description: AppResourceIDs.markdown_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.MarkDown}`],
      },
      //
      // DescriptionList ...
      {
        icon: XIconNames.list,
        id: `${PageName.DescriptionList}`,
        name: `${PageName.DescriptionList}`,
        title: AppResourceIDs.description_list,
        baseRoute: `${ComponentsRoutes.DescriptionList}`,
        description: AppResourceIDs.description_list_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.DescriptionList}`,
        ],
      },
      //
      // ExpandableList ...
      {
        icon: XIconNames.list,
        id: `${PageName.ExpandableList}`,
        name: `${PageName.ExpandableList}`,
        title: AppResourceIDs.expandable_list,
        baseRoute: `${ComponentsRoutes.ExpandableList}`,
        description: AppResourceIDs.expandable_list_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.ExpandableList}`,
        ],
      },
      //
      // ExpandablePanel ...
      {
        icon: XIconNames.list,
        id: `${PageName.ExpandablePanel}`,
        name: `${PageName.ExpandablePanel}`,
        title: AppResourceIDs.expandable_panel,
        baseRoute: `${ComponentsRoutes.ExpandablePanel}`,
        description: AppResourceIDs.expandable_panel_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.ExpandablePanel}`,
        ],
      },
      //
      // Slider ...
      {
        icon: XIconNames.list,
        id: `${PageName.Slider}`,
        name: `${PageName.Slider}`,
        title: AppResourceIDs.slider,
        baseRoute: `${ComponentsRoutes.Slider}`,
        description: AppResourceIDs.slider_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Slider}`],
      },
      //
      // Stepper ...
      {
        icon: XIconNames.list,
        id: `${PageName.Stepper}`,
        name: `${PageName.Stepper}`,
        title: AppResourceIDs.stepper,
        baseRoute: `${ComponentsRoutes.Stepper}`,
        description: AppResourceIDs.stepper_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Stepper}`],
      },
      //
      // Tabs ...
      {
        icon: XIconNames.list,
        id: `${PageName.Tabs}`,
        name: `${PageName.Tabs}`,
        title: AppResourceIDs.tabs,
        baseRoute: `${ComponentsRoutes.Tabs}`,
        description: AppResourceIDs.tabs_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Tabs}`],
      },
      //
      // Table ...
      {
        icon: XIconNames.list,
        id: `${PageName.Table}`,
        name: `${PageName.Table}`,
        title: AppResourceIDs.table,
        baseRoute: `${ComponentsRoutes.Table}`,
        description: AppResourceIDs.tabs_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Table}`],
      },
      //
      // Page ...
      {
        icon: XIconNames.list,
        id: `${PageName.Page}`,
        name: `${PageName.Page}`,
        title: AppResourceIDs.page,
        baseRoute: `${ComponentsRoutes.Page}`,
        description: AppResourceIDs.page_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Page}`],
      },
      //
      // TabNavigator ...
      {
        icon: XIconNames.list,
        id: `${PageName.TabNavigator}`,
        name: `${PageName.TabNavigator}`,
        title: AppResourceIDs.tab_navigator,
        baseRoute: `${ComponentsRoutes.TabNavigator}`,
        description: AppResourceIDs.tab_navigator_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.TabNavigator}`,
        ],
      },
    ],
  },

  //
  TabsNav: {
    icon: XIconNames.list,
    id: `${PageName.TabsNav}`,
    name: `${PageName.TabsNav}`,
    title: AppResourceIDs.tab_navigator,
    baseRoute: `${AppRoutes.TabsNav}`,
    route: ['/', `${AppRoutes.TabsNav}`],
    description: AppResourceIDs.tab_navigator_description,
    childs: [
      //
      // TabPage 1 ...
      {
        icon: XIconNames.list,
        id: `${PageName.TabPage1}`,
        name: `${PageName.TabPage1}`,
        title: AppResourceIDs.tab_page_1,
        baseRoute: `${TabsRoutes.TabPage1}`,
        description: AppResourceIDs.tab_navigator_description,
        route: ['/', `${AppRoutes.TabsNav}`, `${TabsRoutes.TabPage1}`],
      },
      //
      // TabPage 2 ...
      {
        icon: XIconNames.list,
        id: `${PageName.TabPage2}`,
        name: `${PageName.TabPage2}`,
        title: AppResourceIDs.tab_page_2,
        baseRoute: `${TabsRoutes.TabPage2}`,
        description: AppResourceIDs.tab_navigator_description,
        route: ['/', `${AppRoutes.TabsNav}`, `${TabsRoutes.TabPage2}`],
      },
      //
      // TabPage 3 ...
      {
        icon: XIconNames.list,
        id: `${PageName.TabPage3}`,
        name: `${PageName.TabPage3}`,
        title: AppResourceIDs.tab_page_3,
        baseRoute: `${TabsRoutes.TabPage3}`,
        description: AppResourceIDs.tab_navigator_description,
        route: ['/', `${AppRoutes.TabsNav}`, `${TabsRoutes.TabPage3}`],
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
  HomeIntroduction: PageIndex.Home.childs[0],

  //
  Core: PageIndex.Core,
  CoreIntroduction: PageIndex.Core.childs[0],

  //
  Services: PageIndex.Services,
  ServicesIntroduction: PageIndex.Services.childs[0],

  //
  Components: PageIndex.Components,
  ComponentsIntroduction: PageIndex.Components.childs[0],
  SmallComponents: PageIndex.Components.childs[1],
  Card: PageIndex.Components.childs[2],
  Icon: PageIndex.Components.childs[3],
  Counter: PageIndex.Components.childs[4],
  ColorPicker: PageIndex.Components.childs[5],
  Fab: PageIndex.Components.childs[6],
  FileUpload: PageIndex.Components.childs[7],
  Form: PageIndex.Components.childs[8],
  Grid: PageIndex.Components.childs[9],
  List: PageIndex.Components.childs[10],
  Map: PageIndex.Components.childs[11],
  MarkDown: PageIndex.Components.childs[12],
  DescriptionList: PageIndex.Components.childs[13],
  ExpandableList: PageIndex.Components.childs[14],
  ExpandablePanel: PageIndex.Components.childs[15],
  Slider: PageIndex.Components.childs[16],
  Stepper: PageIndex.Components.childs[17],
  Tabs: PageIndex.Components.childs[18],
  Table: PageIndex.Components.childs[19],
  Page: PageIndex.Components.childs[20],
  TabNavigator: PageIndex.Components.childs[21],

  //
  TabsNav: PageIndex.TabsNav,
  TabPage1: PageIndex.TabsNav.childs[0],
  TabPage2: PageIndex.TabsNav.childs[1],
  TabPage3: PageIndex.TabsNav.childs[2],

  //
  Themes: PageIndex.Themes,
  ThemeManager: PageIndex.Themes.childs[0],
};

//
// Admin Navigator Pages ...
export const NavPageItems: XNavigatorListItem[] = [
  //
  //#region Home ...
  {
    ...toNavigatiorListItem(PageIndex.Home),
  },
  //#endregion

  //
  //#region Core ...
  {
    ...toNavigatiorListItem(PageIndex.Core),
  },
  //#endregion

  //
  //#region Services ...
  {
    ...toNavigatiorListItem(PageIndex.Services),
  },
  //#endregion

  //
  //#region Components ...
  {
    ...toNavigatiorListItem(PageIndex.Components),
  },
  //#endregion
];

//
// Tabs Navigators Pages ...
export const TabNavsItems: XTabNavigatorItem[] = [
  {
    ...toTabNavigatiorItem(Pages.TabPage1),
  },
  {
    ...toTabNavigatiorItem(Pages.TabPage2),
  },
  {
    ...toTabNavigatiorItem(Pages.TabPage3),
  },
];
//#endregion
