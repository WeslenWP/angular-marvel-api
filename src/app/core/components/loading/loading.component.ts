import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  template: `
    <div *ngIf="active" class="load-container">
      <mat-spinner color="warn"></mat-spinner>
    </div>
  `,
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  active: boolean = false;

  constructor(public _loadingService: LoadingService) {
    this._loadingService.loading$.subscribe((res) => {
      this.active = res
    })
  }
}
