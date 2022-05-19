import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';


const Components = [ToolbarComponent, LoadingComponent];
const Modules = [MaterialModule, HttpClientModule];

@NgModule({
  declarations: [Components],
  imports: [CommonModule, Modules],
  exports: [Components, Modules],

})
export class CoreModule { }
