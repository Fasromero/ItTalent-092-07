import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { IndexComponent } from './components/index/index.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { LoginComponent} from './components/login/login.component';
import { VisitaComponent } from './components/visita/visita.component';
import { ReportarComponent } from './components/reportar/reportar.component';
import { AvistamientoComponent } from './components/avistamiento/avistamiento.component';
import { InfoespecieComponent } from './components/infoespecie/infoespecie.component';



import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'visita', component: VisitaComponent },
    { path: 'reportar', component: ReportarComponent },
    { path: 'avistamiento', component: AvistamientoComponent },
    { path: 'infoespecie/:id', component: InfoespecieComponent },
    { path: '**', component: PagenotfoundComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash: true})],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
