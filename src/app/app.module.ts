import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanineriaComponent } from './panineria/panineria.component';
import { PaniniComponent } from './panineria/panini/panini.component';
import { PaninoComponent } from './panineria/panino/panino.component';
import { PaninoEditComponent } from './panineria/panino/panino-edit/panino-edit.component';
import { AddPaninoComponent } from './panineria/add-panino/add-panino.component';

@NgModule({
  declarations: [
    AppComponent,
    PanineriaComponent,
    PaniniComponent,
    PaninoComponent,
    PaninoEditComponent,
    AddPaninoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }