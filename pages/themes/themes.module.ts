import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewsModule } from '../../views/views.module';
import { XCanDeactivateGuard } from 'x-framework-core';
import { BaseRoutes, ThemesRoutes } from 'src/app/config/page.config';
import { ThemeManagerPage } from './theme-manager/theme-manager.page';

@NgModule({
  imports: [
    ViewsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: BaseRoutes.Default,
        redirectTo: ThemesRoutes.ThemeManager,
        pathMatch: 'full',
      },
      {
        path: ThemesRoutes.ThemeManager,
        component: ThemeManagerPage,
        canDeactivate: [XCanDeactivateGuard]
      },
    ]),
  ],
  declarations: [ThemeManagerPage],
})
export class ThemesPageModule {}
