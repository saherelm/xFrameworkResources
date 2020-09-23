import { XConfig } from './app-config';
import { InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

export const XCONFIG: XConfig = JSON.parse(
  JSON.stringify(environment.configurations)
);

export const X_CONFIG = new InjectionToken<XConfig>('x_config');
