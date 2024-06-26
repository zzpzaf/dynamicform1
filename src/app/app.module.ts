import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { RequestDataComponent } from './request-data/request-data.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [AppComponent, HomeComponent, RequestDataComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    DynamicFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
