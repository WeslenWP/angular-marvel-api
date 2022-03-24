import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeroesListComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    
  ],
})
export class HeroesModule {}
