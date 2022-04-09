import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  template: `
    <div class="load-container">
      <mat-spinner color="warn"></mat-spinner>
    </div>
  `,
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}
