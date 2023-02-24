# Environment Banner Module

This is an Angular module for displaying an environment banner in your application. The banner is displayed in the center of the page, and the environment and color are customizable.

## Installation

To install this module in your Angular project, run the following command:
```bash
npm i @billnice/environment-banner
```


## Usage

To use the `EnvironmentBannerModule` in your Angular project, you need to import it into your app module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EnvironmentBannerModule } from 'environment-banner';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, EnvironmentBannerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
Once you have imported the EnvironmentBannerModule, you can use the environment-banner component in your HTML template:

```html
<environment-banner 
[environment]="'Production'" 
[backgroundColor]="'#FF0000'"
[textColor]="'#FFFFFF'"
>
</environment-banner>
```
