import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RequestProgressBarComponent } from './request-progress-bar.component';
import { LoadingStateInterceptor } from './services/loading-state.interceptor';
import { LoadingStateService } from './services/loading-state.service';

@NgModule({
  providers: [
    LoadingStateService,
    { provide: HTTP_INTERCEPTORS,
      useClass: LoadingStateInterceptor,
      multi: true
    }
  ],
  declarations: [
    RequestProgressBarComponent
  ],
  exports: [
    RequestProgressBarComponent
  ]
})

export class RequestProgressBarModule { }
