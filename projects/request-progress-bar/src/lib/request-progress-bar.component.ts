import { Component, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { LoadingStateService } from './services/loading-state.service';
@Component({
  selector: 'request-progress-bar',
  templateUrl: './request-progress-bar.component.html',
  styleUrls: ['./request-progress-bar.component.scss'],
  animations: [
    trigger('progressState', [
      state('true', style({ opacity:'1',width: '98%' })),
      state('false', style({ width: '0%',opacity:'0' })),
      transition('0 => 1', animate('1s ease-in')),
      transition('1 => 0', animate('0.01s ease-out')),
    ]),
  ],
})
export class RequestProgressBarComponent {
  /**
   * progress bar color
   * @Input() barColor: string = '#ff0000';
   **/
  @Input() barColor: string = '#ff0000';
  /**
   * is loading state by default it listens to the loading state service which listens to the http interceptor loading state but you can set it manually
   * @Input() IsLoading: boolean = false;
   **/
  @Input() isLoading: boolean = false;
  constructor(private loaderService: LoadingStateService) {
    loaderService.state.subscribe((v) => {
      //console.log('loading: ', v);
      this.isLoading = v;
    });
  }
}
