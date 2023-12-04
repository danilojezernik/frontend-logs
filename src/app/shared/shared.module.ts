import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackComponent } from './components/go-back/go-back.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { SpinnerComponent } from './components/spinner/spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SlovenianDateTimePipe } from './pipe/slovenian-date-time.pipe';
import {ServicesModule} from "../services/services.module";



@NgModule({
  declarations: [
    GoBackComponent,
    SpinnerComponent,
    SlovenianDateTimePipe
  ],
  exports: [
    GoBackComponent,
    SpinnerComponent,
    SlovenianDateTimePipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ServicesModule
  ]
})
export class SharedModule { }
