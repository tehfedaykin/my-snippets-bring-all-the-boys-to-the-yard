import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './ui-components/button/button.component';
import { ShakeDirective } from './ui-components/shake.directive';
import { InputComponent } from './ui-components/input/input.component';
import { TabsComponent } from './ui-components/tabs/tabs.component';
import { TabComponent } from './ui-components/tabs/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ShakeDirective,
    InputComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
