import { NgModule } from '@angular/core';
import { Pages, BaseRoutes } from './config/page.config';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //
  // Default ...
  {
    path: BaseRoutes.Default,
    redirectTo: Pages.Home.baseRoute,
    pathMatch: 'full',
  },
  //
  // Home ...
  {
    path: Pages.Home.baseRoute,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  //
  // Themes ...
  {
    path: Pages.Themes.baseRoute,
    loadChildren: () =>
      import('./pages/themes/themes.module').then((m) => m.ThemesPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
