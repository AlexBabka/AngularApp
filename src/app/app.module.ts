import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {JobsComponent} from './jobs/jobs.component';
import {HeaderComponent} from "./header/header.component";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FooterComponent} from './footer/footer.component';
import {MdButtonModule, MdIconModule, MdIconRegistry} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    NgxDatatableModule,
    MdButtonModule,
    MdIconModule
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})

export class AppModule {
}
