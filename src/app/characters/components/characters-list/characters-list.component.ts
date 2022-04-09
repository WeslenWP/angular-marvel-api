import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { tap } from 'rxjs';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  //variaveis
  private offset: number = 0;

  allCharacters: any = [];

  haveRequest: boolean = false;

  //Decorators

  @ViewChild('container') container!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const heightContainer = this.container.nativeElement.scrollHeight;
    const toolbar = document.documentElement.scrollHeight - heightContainer;
    const scroll = document.documentElement.scrollTop + toolbar;
    const documentheight = document.documentElement.scrollHeight - 725;

    console.log();

    if (scroll >= documentheight / 2 && this.haveRequest == false)
      this.characters(20);
  }

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.characters();
  }

  ngAfterContentInit(): void {}

  characters(limit: number = 40, offset: number = this.offset) {
    this.haveRequest = true;
    this.charactersService
      .getAllCharacters(offset, limit)
      .pipe(
        tap(() => {
          this.offset += limit;
          this.haveRequest = false;
        })
      )
      .subscribe((res) => {
        this.allCharacters.push(...res.data.results);
      });
  }
}
