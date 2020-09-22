import {
  XFrameworkCoreModule,
  XDirectivesModule as XFrameworkCoreDirectivesModule,
} from 'x-framework-core';
import {
  XManagerService,
  XHttpInterceptorService,
  XFrameworkServicesModule,
  XDirectivesModule as XFrameworkServicesDirectivesModule,
} from 'x-framework-services';
import {
  XFabModule,
  XMapModule,
  XTabsModule,
  XPageModule,
  XCardModule,
  XIconModule,
  XListModule,
  XGridModule,
  XFormModule,
  XTableModule,
  XThemeModule,
  XEmptyModule,
  XColorModule,
  XButtonModule,
  XSliderModule,
  XSpinnerModule,
  XSlotterModule,
  XCounterModule,
  XStepperModule,
  XMarkdownModule,
  XSearchBarModule,
  XThumbnailModule,
  XActionBarModule,
  XFileUploadModule,
  XColorPickerModule,
  XTabNavigatorModule,
  XFileDropAreaModule,
  XAvatarUploadModule,
  XBaseComponentModule,
  XExpandableListModule,
  XExpandablePanelModule,
  XDescriptionListModule,
  XFrameworkComponentsModule,
} from 'x-framework-components';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { VPageComponent } from './v-page/v-page.component';
import { VMaintainerComponent } from './v-maintainer/v-maintainer.component';

@NgModule({
  declarations: [VPageComponent, VMaintainerComponent],
  providers: [
    XManagerService,
    //
    // Register Http Interceptor ...
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XHttpInterceptorService,
      multi: true,
    },
  ],
  imports: [
    //
    IonicModule,
    CommonModule,

    //
    XFrameworkCoreModule,
    XFrameworkCoreDirectivesModule,

    //
    XFrameworkServicesModule,
    XFrameworkServicesDirectivesModule,

    //
    XEmptyModule,
    XBaseComponentModule,
    XFrameworkComponentsModule,

    //
    XFabModule,
    XMapModule,
    XPageModule,
    XCardModule,
    XIconModule,
    XFormModule,
    XTabsModule,
    XTabsModule,
    XPageModule,
    XIconModule,
    XListModule,
    XGridModule,
    XFormModule,
    XColorModule,
    CommonModule,
    XTableModule,
    XThemeModule,
    XButtonModule,
    XSliderModule,
    XSpinnerModule,
    XStepperModule,
    XSlotterModule,
    XCounterModule,
    XMarkdownModule,
    XSearchBarModule,
    XThumbnailModule,
    XActionBarModule,
    XFileUploadModule,
    XColorPickerModule,
    XFileDropAreaModule,
    XTabNavigatorModule,
    XAvatarUploadModule,
    XExpandableListModule,
    XExpandablePanelModule,
    XDescriptionListModule,
  ],
  exports: [
    //
    IonicModule,
    CommonModule,

    //
    XFrameworkCoreModule,
    XFrameworkCoreDirectivesModule,

    //
    XFrameworkServicesModule,
    XFrameworkServicesDirectivesModule,

    //
    XEmptyModule,
    XBaseComponentModule,

    //
    XFabModule,
    XMapModule,
    XPageModule,
    XIconModule,
    XFormModule,
    XTabsModule,
    XTabsModule,
    XPageModule,
    XCardModule,
    XIconModule,
    XListModule,
    XGridModule,
    XFormModule,
    XColorModule,
    CommonModule,
    XTableModule,
    XThemeModule,
    XButtonModule,
    XSliderModule,
    XSpinnerModule,
    XStepperModule,
    XSlotterModule,
    XCounterModule,
    XMarkdownModule,
    XSearchBarModule,
    XThumbnailModule,
    XActionBarModule,
    XFileUploadModule,
    XColorPickerModule,
    XFileDropAreaModule,
    XTabNavigatorModule,
    XAvatarUploadModule,
    XExpandableListModule,
    XExpandablePanelModule,
    XDescriptionListModule,

    //
    VPageComponent,
    VMaintainerComponent,
  ],
})
export class ViewsModule {}
