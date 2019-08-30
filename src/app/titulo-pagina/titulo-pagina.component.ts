import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'titulo-pagina',
  templateUrl: './titulo-pagina.component.html',
  styleUrls: ['./titulo-pagina.component.css']
})
export class TituloPaginaComponent implements OnInit {

  @Input() titulo;
  @Input() subtitulo;

  constructor() { }

  ngOnInit() {
  }

}
