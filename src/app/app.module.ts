import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EditorModule } from '@tinymce/tinymce-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsComponent } from './signals/signals.component';
import { TinyPlaygroundComponent } from './tiny-playground/tiny-playground.component';

@NgModule({
  declarations: [AppComponent, SignalsComponent, TinyPlaygroundComponent],
  imports: [BrowserModule, AppRoutingModule, EditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
