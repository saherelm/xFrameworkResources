import { XConfig, xSharedConfig } from '../app/config/app-config';

export const environment = {
  production: true,
  configurations: {
    ...xSharedConfig,

    //
    isProd: true
  } as XConfig
};
