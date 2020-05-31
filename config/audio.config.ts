import { XNotificationSound, XActionType } from 'x-framework-core';

export const NotificationAudioSources: XNotificationSound[] = [
  {
    type: XActionType.User,
    resourcePath: '/assets/audio/user_notification.wav',
  },
  {
    type: XActionType.System,
    resourcePath: '/assets/audio/system_notifications.wav',
  },
];
