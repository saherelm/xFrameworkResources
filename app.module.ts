import {
  XFrameworkCoreModule,
  X_FRAMEWORK_CORE_CONFIG,
} from 'x-framework-core';
import {
  XFrameworkServicesModule,
  X_FRAMEWORK_SERVICES_CONFIG,
  XManagerService,
  XHttpInterceptorService,
} from 'x-framework-services';
import {
  XFrameworkComponentsModule,
  X_FRAMEWORK_COMPONENTS_CONFIG,
} from 'x-framework-components';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { X_CONFIG, XCONFIG } from './config/x-config';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    XFrameworkCoreModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    XFrameworkServicesModule,
    XFrameworkComponentsModule,
  ],
  providers: [
    XManagerService,
    {
      provide: X_FRAMEWORK_CORE_CONFIG,
      useValue: XCONFIG,
    },
    {
      provide: X_FRAMEWORK_SERVICES_CONFIG,
      useValue: XCONFIG,
    },
    {
      provide: X_FRAMEWORK_COMPONENTS_CONFIG,
      useValue: XCONFIG,
    },
    {
      provide: X_CONFIG,
      useValue: XCONFIG,
    },
    //
    // Register Http Interceptor ...
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
