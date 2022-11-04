import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { FranchiseLocatorComponent } from './franchise-locator/franchise-locator.component';



import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

import { FranchiseService } from './franchise.service';

const appRoutes: Routes = [
  { path: ''             , redirectTo: '/franchises', pathMatch: 'full' },
  { path: 'company'      , component: AppComponent },
  { path: 'franchise/:id', component: FranchiseComponent, 
    data: { breadcrumb: ['1','2'] }
  },
  { path: 'franchises'          , component: FranchiseLocatorComponent,
  data: { breadcrumb: ['1','2'] }
  }
];

@NgModule({
  imports:      [ 
    HttpClientModule, 
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatCheckboxModule, 
    MatSelectModule, 
    MatButtonToggleModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    RouterModule.forRoot( appRoutes,{ enableTracing: false } )
   ],
  declarations: [ AppComponent, FranchiseComponent, FranchiseLocatorComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ FranchiseService ]
})

export class AppModule {
}
