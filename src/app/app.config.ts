import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { CloseOutline } from '@ant-design/icons-angular/icons';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNzConfig } from 'ng-zorro-antd/core/config';
import { provideNzIcons } from 'ng-zorro-antd/icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideNzIcons([CloseOutline]),
    // Ai-BOX primary blue (see reference palette)
    provideNzConfig({ theme: { primaryColor: '#1F5DF9' } }),
  ],
};
