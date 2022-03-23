import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened: boolean = false;
  title = 'Angular Marvel API ';

  toggle() {
    this.opened = !this.opened;
  }
}
