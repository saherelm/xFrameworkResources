import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChildPage } from './child/child.page';
import { ViewsModule } from '../../views/views.module';
import { BaseRoutes, HomeRoutes } from 'src/app/config/page.config';

@NgModule({
  imports: [
    ViewsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: BaseRoutes.Default,
        redirectTo: HomeRoutes.Child,
        pathMatch: 'full',
      },
      {
        path: HomeRoutes.Child,
        component: ChildPage,
      },
    ]),
  ],
  declarations: [ChildPage],
})
export class HomePageModule {}
