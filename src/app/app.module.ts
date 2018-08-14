import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './app.routes';


// Services


// Components
import { AppComponent } from './app.component';
import { NavabarComponent } from './components/shared/navabar/navabar.component';
import { IndexComponent } from './components/index/index.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { VisitaComponent } from './components/visita/visita.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ReportarComponent } from './components/reportar/reportar.component';
import { AvistamientoComponent } from './components/avistamiento/avistamiento.component';
import { InfoespecieComponent } from './components/infoespecie/infoespecie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    IndexComponent,
    AcercaComponent,
    VisitaComponent,
    LoginComponent,
    PagenotfoundComponent,
    ReportarComponent,
    AvistamientoComponent,
    InfoespecieComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
