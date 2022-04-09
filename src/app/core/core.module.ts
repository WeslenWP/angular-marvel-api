import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { SearchComponent } from './components/search/search.component';

const Components = [ToolbarComponent, SidenavComponent, LoadingComponent];
const Modules = [MaterialModule, HttpClientModule];

@NgModule({
  declarations: [Components, SearchComponent],
  imports: [CommonModule, Modules],
  exports: [Components, Modules],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
