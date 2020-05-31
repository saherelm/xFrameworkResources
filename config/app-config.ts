import { XFrameworkCoreConfig } from 'x-framework-core';
import { NotificationAudioSources } from './audio.config';
import { XFrameworkServicesConfig } from 'x-framework-services';
import { XFrameworkComponentsConfig } from 'x-framework-components';
import {
  AvailableTranslationResources,
  DefaultLocale,
} from './localization.config';

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

export const xFrameworkCoreSharedConfig: XFrameworkComponentsSharedConfig = {
  //
  // App Info ...
  appInstanceName: 'xFramework App',
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

export const xFrameworkComponentsSharedConfig: XFrameworkComponentsSharedConfig = {};

export const xAppSharedConfig: XAppSharedConfig = {};

export const xSharedConfig: XSharedConfig = {
  ...xFrameworkCoreSharedConfig,
  ...xFrameworkServicesSharedConfig,
  ...xFrameworkComponentsSharedConfig,
  ...xAppSharedConfig,
};
