import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { tap } from 'rxjs';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  //variaveis
  private offset: number = 40;

  allCharacters: any[] = [];

  haveRequest: boolean = false;

  //Decorators

  @ViewChild('container') container!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const heightContainer = this.container.nativeElement.scrollHeight;
    const toolbar = document.documentElement.scrollHeight - heightContainer;
    const scroll = document.documentElement.scrollTop + toolbar;
    const documentheight = document.documentElement.scrollHeight - 725;

    if ((scroll >= documentheight / 2) && (!this._charactersService.haveRequest) && (!this._charactersService.searching)) {
      this._charactersService.getAllCharacters(this.offset, 40)
      this.offset += 40
    }
  }

  constructor(private _charactersService: CharactersService) {
    this._charactersService.getAllCharacters(0, 40)
  }

  ngOnInit(): void {
    // this.characters();
    this._charactersService.characters$.subscribe((res) => {
      this.allCharacters.push(...res)
    })
  }

  ngAfterContentInit(): void { }
}
