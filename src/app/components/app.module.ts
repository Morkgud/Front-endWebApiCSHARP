import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { EsportesService } from 'src/app/esportes.service';
import { FilmesService } from 'src/app/filmes.service';
import { SeriesService } from 'src/app/series.service';
import { UsuariosService } from 'src/app/usuarios.service';
import { EsportesComponent } from './esportes/esportes.component';
import { SeriesComponent } from './series/series.component';
import { FilmesComponent } from './filmes/filmes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [AppComponent, EsportesComponent, SeriesComponent, FilmesComponent, UsuariosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [
    HttpClientModule,
    UsuariosService,
    FilmesService,
    SeriesService,
    EsportesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
