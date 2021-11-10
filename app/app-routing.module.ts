import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FomgrupComponent } from './fomgrup/fomgrup.component';

const routes: Routes = [
  {path:'fomgrup',component:FomgrupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
