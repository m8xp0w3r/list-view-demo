import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ListViewModule} from "@syncfusion/ej2-angular-lists";
import {ButtonModule} from "@syncfusion/ej2-angular-buttons";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListViewModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
