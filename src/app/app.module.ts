import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepModule } from './modules/step/step.module';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StepModule, ComponentsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(@Inject(LOCALE_ID) public locale: string) {
    this.getUsersLocale(locale);
  }

  getUsersLocale(defaultValue: string): string {
    if (
      typeof window === 'undefined' ||
      typeof window.navigator === 'undefined'
    ) {
      return defaultValue;
    }
    const wn = window.navigator as any;
    let lang = wn.languages ? wn.languages[0] : defaultValue;
    lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;

    ['fr-FR', 'en-US', 'es-ES'].find((supportedLanguage) =>
      supportedLanguage === lang ? lang : defaultValue
    );
    return lang;
  }
}
