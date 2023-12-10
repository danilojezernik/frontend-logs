import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexHsaComponent} from "./core/pages/hypnosis-studio-alen/index/index-hsa.component";
import {PrivateComponent} from "./core/pages/hypnosis-studio-alen/private/private.component";
import {PublicComponent} from "./core/pages/hypnosis-studio-alen/public/public.component";
import {IndexHypnosisStudioAlenComponent} from "./core/pages/hypnosis-studio-alen/index-hsa/index-hypnosis-studio-alen.component";
import {IndexComponent} from "./core/pages/index-login/index.component";
import {AuthGuardService} from "./services/auth/auth-guard.service";
import {BackendComponent} from "./core/pages/hypnosis-studio-alen/backend/backend.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'Log in to Dashboard'
  },
  {
    path: 'login',
    component: IndexHsaComponent,
    title: 'Dashboard',
    canActivate: [AuthGuardService]
  },
  // Hypnosis Studio Alen Routes - START
  {
    path: 'hypnosis-studio-alen-private',
    component: PrivateComponent,
    title: 'HSA Private',
    canActivate: [AuthGuardService]
  },
  {
    path: 'hypnosis-studio-alen-public',
    component: PublicComponent,
    title: 'HSA Public',
    canActivate: [AuthGuardService]
  },
  {
    path: 'hypnosis-studio-alen-backend',
    component: BackendComponent,
    title: 'HSA Backend',
    canActivate: [AuthGuardService]
  },
  {
    path: 'hypnosis-studio-alen-index',
    component: IndexHypnosisStudioAlenComponent,
    title: 'HSA Index',
    canActivate: [AuthGuardService]
  }
  // Hypnosis Studio Alen Routes - END

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
