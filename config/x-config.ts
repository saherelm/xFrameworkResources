import { XConfig } from './app-config';
import { environment } from '../../environments/environment';
import { InjectionToken } from '@angular/core';

export const XCONFIG: XConfig = JSON.parse(
  JSON.stringify(environment.configurations)
);

export const X_CONFIG = new InjectionToken<XConfig>('x_config');
