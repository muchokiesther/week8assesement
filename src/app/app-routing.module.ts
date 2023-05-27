import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', loadComponent: () => import('./landingpg/landingpg.component').then(c => c.LandingpgComponent)},
  { path: 'login',loadComponent:() =>import('./addstudent/addstudent.component').then(d =>d.AddstudentComponent)},
  { path: 'display-students',loadComponent:() =>import('./dislaystudent/dislaystudent.component').then(e=>e.DislaystudentComponent) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
