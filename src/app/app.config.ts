import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideNzConfig } from 'ng-zorro-antd/core/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Ai-BOX primary blue (see reference palette)
    provideNzConfig({ theme: { primaryColor: '#1F5DF9' } }),
  ],
};
