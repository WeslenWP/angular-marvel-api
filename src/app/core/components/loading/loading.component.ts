import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  template: `<mat-progress-bar color="warn" *ngIf="active" class="loader" mode="indeterminate"></mat-progress-bar>`,
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  active: boolean = true;

  constructor(public _loadingService: LoadingService) {
    this._loadingService.loading$.subscribe((res) => {
      this.active = res
    })
  }
}
