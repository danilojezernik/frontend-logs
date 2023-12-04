import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {ServicesModule} from "./services/services.module";
import {HttpClientModule} from "@angular/common/http";
import { registerLocaleData } from '@angular/common';
import localeSl from '@angular/common/locales/sl';

// Register the Slovenian locale data.
registerLocaleData(localeSl);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ServicesModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'sl'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
