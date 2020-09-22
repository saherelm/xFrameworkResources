import {
  DefaultLocale,
  AvailableTranslationResources,
} from './localization.config';
import { XFrameworkCoreConfig } from 'x-framework-core';
import { NotificationAudioSources } from './audio.config';
import { XFrameworkServicesConfig } from 'x-framework-services';
import { XFrameworkComponentsConfig } from 'x-framework-components';

// tslint:disable-next-line:no-empty-interface
export interface AppConfig {}

export type XFrameworkCoreSharedConfig = Partial<XFrameworkCoreConfig>;
export type XFrameworkServicesSharedConfig = Partial<XFrameworkServicesConfig>;
export type XFrameworkComponentsSharedConfig = Partial<
  XFrameworkComponentsConfig
>;
export type XAppSharedConfig = Partial<AppConfig>;

export type XConfig = XFrameworkCoreConfig &
  XFrameworkServicesConfig &
  XFrameworkComponentsConfig &
  AppConfig;
export type XSharedConfig = Partial<XConfig>;

export const xFrameworkCoreSharedConfig: XFrameworkCoreSharedConfig = {
  //
  // App Info ...
  appInstanceName: 'xFrameworkTestApp',
  appNameResource: 'app_name',
  appCompanyResource: 'company',
  appVersion: 'v1.1',

  //
  // Audio Service Configurations ...
  defaultNotificationDelay: 2000,
  notificationAudioSources: NotificationAudioSources,

  //
  // Language Configuration ...
  availableLanguages: AvailableTranslationResources,
  defaultLanguage: DefaultLocale,

  //
  // Api Configuration ...
  poweredValue: 'SaherElmITCenter',

  //
  // Security Service Configurations ...
  secretKey: 'SaherElm@09121694056@Hadi_Khazaee_Asl@yahoo.com',

  //
  // Logging Configuration ...
  baseLogTag: 'xFrameworkApp',

  //
  // Image Related Configs ...
  minAllowedImageSize: 512,
  maxAllowedImageSize: 5242880,
  minAllowedImageCroppableSize: 512,
  allowedImageExtensions: ['.png', '.jpg', '.jpeg'],

  //
  // Profile Image Configs ...
  maxProfileImageSize: 5242880,
  maxProfileImagesUploadFiles: 10,

  //
  defaultCountryCode: 'IR',

  //
  defaultPageSize: 20,
  pageSizes: [10, 20, 40, 50, 100, 200],
};

export const xFrameworkServicesSharedConfig: XFrameworkServicesSharedConfig = {};

export const xFrameworkComponentsSharedConfig: XFrameworkComponentsSharedConfig = {
  //
  // File Config ...
  minAllowedFileSize: 512,
  maxAllowedFileSize: 20971520,
  maxAllowedSize: 966367641,
  maxUploadFiles: 10,

  //
  defaultSearchDebounceTime: 500,
};

export const xAppSharedConfig: XAppSharedConfig = {};

export const xSharedConfig: XSharedConfig = {
  ...xFrameworkCoreSharedConfig,
  ...xFrameworkServicesSharedConfig,
  ...xFrameworkComponentsSharedConfig,
  ...xAppSharedConfig,
};
