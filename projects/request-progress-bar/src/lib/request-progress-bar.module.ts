import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RequestProgressBarComponent } from './request-progress-bar.component';
import { LoadingStateInterceptor } from './services/loading-state.interceptor';
import { LoadingStateService } from './services/loading-state.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  providers: [
    LoadingStateService,
    { provide: HTTP_INTERCEPTORS,
      useClass: LoadingStateInterceptor,
      multi: true
    }
  ],
  imports: [
    BrowserAnimationsModule
  ],
  declarations: [
    RequestProgressBarComponent
  ],
  exports: [
    RequestProgressBarComponent
  ]
})

export class RequestProgressBarModule { }
