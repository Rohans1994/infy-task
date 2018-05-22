import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FlashMessagesModule} from 'angular2-flash-messages';

import {ValidateService} from './services/validate.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingComponent } from './components/booking/booking.component';

const appRoutes: Routes =  [
  {path:'', component: BookingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
