import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { firebaseConfig } from '../../firebase.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions())
    ),
  ],
};
