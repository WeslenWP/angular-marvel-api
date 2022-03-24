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
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
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
      this.heroes();
  }

  constructor(private characters: CharactersService) {}

  ngOnInit(): void {
    this.heroes();
  }

  ngAfterContentInit(): void {}

  heroes(offset: number = this.offset) {
    this.haveRequest = true;
    this.characters
      .getAllCharacters(offset)
      .pipe(
        tap(() => {
          this.offset += 20;
          this.haveRequest = false;
        })
      )
      .subscribe((res) => {
        this.allCharacters.push(...res.data.results);

        // Object.assign(this.allCharacters, res.data.results);
        console.log(this.allCharacters);
      });
  }
}
