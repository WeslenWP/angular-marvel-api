import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './list/list.component';

@NgModule({
  declarations: [CharactersListComponent],
  imports: [CommonModule, CharactersRoutingModule, MaterialModule],
})
export class CharactersModule {}
