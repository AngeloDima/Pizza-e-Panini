import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanineriaComponent } from './panineria/panineria.component';
import { PaninoComponent } from './panineria/panino/panino.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "panineria", component: PanineriaComponent },
  { path: "panineria/:nome", component: PaninoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
