import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.css']
})
export class PublicacaoComponent implements OnInit {
  tipos: any = [
    {tipo: "audio", str: "Áudio", checked: false},
    {tipo: "texto", str: "Texto", checked: true},
    {tipo: "imagem", str: "Imagem", checked: false},
    {tipo: "video", str: "Vídeo", checked: false}
  ]
  constructor() { }

  ngOnInit() {
  }

}
