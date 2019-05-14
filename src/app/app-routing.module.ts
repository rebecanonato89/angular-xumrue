import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ParentChild2Component } from './parent-child2/parent-child2.component';

const routes: Routes = [
  { path: '', component: ParentChildComponent },
  { path: 'ParentChild2/:id', component: ParentChild2Component }
];


@NgModule({
  imports:[RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
