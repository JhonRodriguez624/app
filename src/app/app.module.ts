import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,  HttpClientJsonpModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent} from './components/precios/precios.component';
import { ExtradataComponent } from './components/extradata/extradata.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { FormsModule } from '@angular/forms';




export const REST_URL = new InjectionToken('rest_url');

@NgModule({
  declarations: [
    AppComponent,    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    ExtradataComponent,
    ReportesComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
  ],
  providers: [{ provide: REST_URL, useValue: `https://spring-boot-smart.herokuapp.com/api/usuarios` }],
  bootstrap: [AppComponent]
})
//https://spring-boot-smart.herokuapp.com/api/usuarios
//http://localhost:3500/users_data
export class AppModule { }
