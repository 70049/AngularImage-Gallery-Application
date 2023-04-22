import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/layouts/layouts.module').then((m) => m.LayoutsModule)
  },
  {
    path: '**', component: NoPageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
