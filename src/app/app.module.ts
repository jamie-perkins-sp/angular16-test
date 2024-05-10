import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsComponent } from './signals/signals.component';
import { TinyPlaygroundComponent } from './tiny-playground/tiny-playground.component';
import { JsonAnalyzerComponent } from './json-analyzer/json-analyzer.component';

@NgModule({
  declarations: [AppComponent, SignalsComponent, TinyPlaygroundComponent, JsonAnalyzerComponent],
  imports: [BrowserModule, AppRoutingModule, EditorModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
