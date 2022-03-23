import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
