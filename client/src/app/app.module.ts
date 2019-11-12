import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UnitsListComponent } from './components/units-list/units-list.component';
import { UnitsFormComponent } from './components/units-form/units-form.component';
import { UnitsService} from './services/units.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UnitsListComponent,
    UnitsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UnitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }