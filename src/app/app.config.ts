import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { wishReducer } from '../store/reducers';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { WishesEffect } from '../store/wishes.effect';
import { WishesChuseEffect } from '../store/wishes_chuse.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(),
    provideAnimations(),
    provideClientHydration(),
    provideStore({['wishes']:wishReducer}),
    provideEffects([WishesEffect,WishesChuseEffect])
  ]
};
