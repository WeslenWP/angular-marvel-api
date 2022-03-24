import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  repeat = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 1 },
    { number: 2 },
  ];

  constructor(private characters: CharactersService) {}

  allCharacters: any;
  ngOnInit(): void {
    setTimeout(() => this.heroes(), 1);
  }

  ngAfterContentInit(): void {}

  heroes(offset: number = 0) {
    this.characters.getAllCharacters(offset).subscribe((res) => {
      this.allCharacters = res.data.results;
    });
  }
  log() {
    console.log(this.allCharacters);
  }
}
