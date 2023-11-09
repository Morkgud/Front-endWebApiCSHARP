import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EsportesComponent } from './esportes/esportes.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'esportes', component: EsportesComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'series', component: SeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
