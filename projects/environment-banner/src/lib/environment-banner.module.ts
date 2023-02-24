import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnvironmentBannerComponent } from './environment-banner.component';



@NgModule({
  declarations: [
    EnvironmentBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EnvironmentBannerComponent
  ]
})
export class EnvironmentBannerModule { }
