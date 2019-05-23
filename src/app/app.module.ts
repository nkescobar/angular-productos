import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FiltrosComponent } from './components/productos/filtros/filtros.component';
import { DetalleComponent } from './components/productos/detalle/detalle.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrearComponent } from './components/productos/crear/crear.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ProductosComponent,
    FiltrosComponent,
    DetalleComponent,
    HomeComponent,
    RegistroComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
