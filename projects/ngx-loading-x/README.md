[![GitHub issues](https://img.shields.io/github/issues/silvareal/ngx-loading-x)](https://github.com/silvareal/ngx-loading-x/issues)  ![npm](https://img.shields.io/npm/dw/ngx-loading-x) ![NPM](https://img.shields.io/npm/l/ngx-loading-x)
# Ngx Loading X


![](https://raw.githubusercontent.com/silvareal/ngx-loading-x/master/src/assets/demo/ngx-loading-x-demo.gif?token=AGLSGL6YBT43IEXFEAIJSEC65FRB4)

# Demo
Check out the interactive live [demo](https://stackblitz.com/edit/ngx-loading-x)

# Getting Started

## Installation
Install `ngx-loading-x` from **NPM** using this command
```shell
npm install ngx-loading-x --save
```


## Usage
Import `NgxLoadingXModule` into the root of your module

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { NgxLoadingXModule } from 'ngx-loading-x';
 
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Import NgxLoadingXModule
    NgxLoadingXModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
create a boolean variable that is accessible from the component which will contain ngx-loading-x. This boolean is used as an input into ngx-loading to determine when the loading spinner is visible.
```js
import { Component, OnInit } from '@angular/core';

@Component({
    //...
})
export class AppComponent implements OnInit {
    //...
    public loading = false;

    constructor() { }

    ngOnInit() { }

    registerTest() {
        // loading triggered
        this.load = true;

        setTimeout(() => {
            // loader stops after 5s
            this.load = false,
            // ..
            this.register = true;
        }, 5000)
    }
}
```

Include `ngx-loading-x` component selector to your app component templates, Set the [show] input variable of ngx-loading-x to point to your boolean i.e load, which will determine the `ngx-loading-x` visibility.
```html
<ngx-loading-x [show]="load"></ngx-loading-x>
```
`ngx-loading-x` component selector attributes
## `ngx-loading-x` component selector Attributes
| Attributes | Type | Required | Default | Description |
| :---         |     :---     |       :--- |  :---         |     :---      |
|   `show`   |  boolean     |    optional    |  `false`   |     Determines the visibility of the loader    |
| `bgLogoUrl`    | string      | optional    |    `(empty string)`    | Logo Url    |
| `bgOpacity`    | number      | optional    |    `5`    | background opacity    |
| `bgLogoUrlPosition`    | number      | optional    |    `bottom-right`   | Logo position. available positions can be accessed via `POSITION`   |
| `bgLogoUrlSize`    | number      | optional    |    `100`   | Logo size   |
| `spinnerType`    | string      | optional    |    `wandering-cubes`   | Spinner animation type. available types can be accessed via `SPINNER`  |
| `spinnerSize`    | number      | optional    |   ` 120`   | Spinner size   |
| `spinnerColor`    | string      | optional    |    `#dd1b16`   | Spinner color   |
| `spinnerPosition`    | string      | optional    |    `center-center`   | Spinner position. available positions can be accessed via `POSITION`   |

# `NgxLoadingXBlur` Directive
If you want your page content is blurred/frosted while showing the loading background overlay.
```html
<div NgxLoadingXBlur [show]="load">
  <!-- This page content will be blurred/frosted when loading background overlay is showed -->
</div>
<ngx-loading-x [show]="load"></ngx-loading-x>

```
## Attribute
| Attributes | Type | Required | Default | Description |
| :---         |     :---:      |       :---:  |  :---:          |     :---      |
|   `bgBlur`   |  boolean     |    optional    |    `5`   |    blurred/frosted background    |



# Custom configuration for `NgxLoadingXModule`
You can override the default configuration via `forRoot()` method.
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxLoadingXConfig, POSITION, SPINNER, NgxLoadingXModule } from 'ngx-loading-x';


const ngxLoadingXConfig: NgxLoadingXConfig = {
  show: false,
  bgBlur: 2,
  bgOpacity: 5,
  bgLogoUrl: '',
  bgLogoUrlPosition: POSITION.topLeft,
  bgLogoUrlSize: 100,
  spinnerType: SPINNER.wanderingCubes,
  spinnerSize: 120,
  spinnerColor: '#dd0031',
  spinnerPosition: POSITION.centerCenter,
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxLoadingXModule.forRoot(ngxLoadingXConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

```
| Attributes | Type | Required | Default | Description |
| :---         |     :---     |       :--- |  :---         |     :---      |
|   `show`   |  boolean     |    optional    |  `false`   |     Determines the visibility of the loader    |
| `bgLogoUrl`    | string      | optional    |    `(empty string)`    | Logo Url    |
| `bgOpacity`    | number      | optional    |    `5`    | background opacity    |
|   `bgBlur`   |  boolean     |    optional    |    `5`   |    blurred/frosted background    |
| `bgLogoUrlPosition`    | number      | optional    |    `bottom-right`   | Logo position. available positions can be accessed via `POSITION`   |
| `bgLogoUrlSize`    | number      | optional    |    `100`   | Logo size   |
| `spinnerType`    | string      | optional    |    `wandering-cubes`   | Spinner animation type. available types can be accessed via `SPINNER`  |
| `spinnerSize`    | number      | optional    |   ` 120`   | Spinner size   |
| `spinnerColor`    | string      | optional    |    `#dd1b16`   | Spinner color   |
| `spinnerPosition`    | string      | optional    |    `center-center`   | Spinner position. available positions can be accessed via `POSITION`   |
