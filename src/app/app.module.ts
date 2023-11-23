import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    
    AppComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    PdfViewerModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
