import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.comonent';

let routes = [
  {path: '', component: AppComponent},
  {path: 'result', component: ResultComponent},
]

@NgModule({
  declarations: [
    AppComponent, 
    ResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
