import { Component, Input } from '@angular/core';

@Component({
  selector: 'environment-banner',
  template: `
  <div *ngIf="environment" class="environment-banner" [ngStyle]="{'background-color': backgroundColor}">
    <div class="environment-label" [ngStyle]="{'color': textColor}">{{environment}}</div>
  </div>
  `,
  styleUrls: ['./environment-banner.component.scss'],

})
export class EnvironmentBannerComponent {
  @Input() backgroundColor: string = 'green';
  @Input() environment: string="test";
  @Input() textColor: string = 'white';
}
