import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrivateComponent} from './pages/hypnosis-studio-alen/private/private.component';
import {IndexHsaComponent} from './pages/hypnosis-studio-alen/index/index-hsa.component';
import {PublicComponent} from './pages/hypnosis-studio-alen/public/public.component';
import {IndexHypnosisStudioAlenComponent} from "./pages/hypnosis-studio-alen/index-hsa/index-hypnosis-studio-alen.component";
import {RouterLink} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {ServicesModule} from "../services/services.module";
import {IndexComponent} from "./pages/index-login/index.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PrivateComponent,
    IndexHsaComponent,
    PublicComponent,
    IndexHypnosisStudioAlenComponent,
    IndexComponent
  ],
  exports: [
    PrivateComponent,
    IndexHsaComponent,
    PublicComponent,
    IndexHypnosisStudioAlenComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    ServicesModule,
    SharedModule,
    FormsModule
  ]
})
export class CoreModule {
}
