import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  LucideAngularModule,
  Menu,
  X,
  Home,
  Columns4,
  BetweenHorizontalStart,
  PanelsTopLeft,
  LayoutDashboard,
  DatabaseSearch,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Menu,
        X,
        Home,
        Columns4,
        BetweenHorizontalStart,
        PanelsTopLeft,
        LayoutDashboard,
        DatabaseSearch,
      }),
    ),
  ],
};
