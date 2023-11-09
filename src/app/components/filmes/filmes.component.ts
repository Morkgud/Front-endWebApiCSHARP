import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { FilmesService } from 'src/app/filmes.service';
import { Filmes } from 'src/app/components/Filmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  novoFilmeForm: any;
  tituloFormulario: string = '';

  constructor(private filmesService: FilmesService) {}

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Filme';

    this.novoFilmeForm = new FormGroup({
      Nome: new FormControl(null),
      Ano: new FormControl(null),
      Diretor: new FormControl(null),
      Duracao: new FormControl(null),
      Genero: new FormControl(null),
      Estudio: new FormControl(null),
    });
  }

  cadastrarFilme(): void {
    const filme: Filmes = this.novoFilmeForm.value as Filmes;
    const observer: Observer<Filmes> = {
      next(_result): void {
        alert('Filme cadastrado com sucesso.');
      },
      error(_error): void {
        alert('Erro ao cadastrar o filme!');
      },
      complete(): void {},
    };

    this.filmesService.cadastrarFilme(filme).subscribe(observer);
  }
}
