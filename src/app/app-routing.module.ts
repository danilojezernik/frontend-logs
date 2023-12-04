import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./core/pages/index/index.component";
import {PrivateComponent} from "./core/pages/hypnosis-studio-alen/private/private.component";
import {PublicComponent} from "./core/pages/hypnosis-studio-alen/public/public.component";
import {IndexHypnosisStudioAlenComponent} from "./core/pages/hypnosis-studio-alen/index/index-hypnosis-studio-alen.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'Dashboard'
  },
  // Hypnosis Studio Alen Routes - START
  {
    path: 'hypnosis-studio-alen-private',
    component: PrivateComponent,
    title: 'HSA Private'
  },
  {
    path: 'hypnosis-studio-alen-public',
    component: PublicComponent,
    title: 'HSA Public'
  },
  {
    path: 'hypnosis-studio-alen-index',
    component: IndexHypnosisStudioAlenComponent,
    title: 'HSA Index'
  }
  // Hypnosis Studio Alen Routes - END

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
