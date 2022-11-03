import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

import { FranchiseService } from './franchise.service';

@NgModule({
  imports:      [ HttpClientModule, BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatSelectModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ FranchiseService ]
})

export class AppModule {
}
