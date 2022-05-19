import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CharactersService } from 'src/app/modules/characters/characters.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent implements OnInit {
  constructor(private sidenav: AppComponent, private _charactersService: CharactersService) { }
  height: any;

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.sidenav.toggle();
  }


  timer: any;
  search(inputSearch: HTMLInputElement) {
    if (inputSearch.value == '') this._charactersService.searchCharacters(inputSearch.value)
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this._charactersService.searchCharacters(inputSearch.value)
    }, 500)

  }

}
