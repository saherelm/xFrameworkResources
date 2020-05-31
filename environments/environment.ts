import { XConfig, xSharedConfig } from '../app/config/app-config';

export const environment = {
  production: false,
  configurations: {
    ...xSharedConfig,

    //
    isProd: false
  } as XConfig
};
