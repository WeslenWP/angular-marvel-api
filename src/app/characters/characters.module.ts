import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CharactersListComponent],
  imports: [CommonModule, CharactersRoutingModule, MaterialModule],
})
export class CharactersModule {}
