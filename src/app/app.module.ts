import { HttpClientModule } from '@angular/common/http';
import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepModule } from './modules/step/step.module';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepModule,
    ComponentsModule,
    HttpClientModule,
  ],
  exports: [ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
