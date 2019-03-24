import { Component, OnInit } from '@angular/core';
import { ExemploRestService } from '../service/exemplo-rest.service';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.css']
})
export class PublicacaoComponent implements OnInit {
  usuario: string = '';
  titulo: string = '';
  postagem: string = '';

  tipos: any = [
    {tipo: "audio", str: "Áudio", checked: false},
    {tipo: "texto", str: "Texto", checked: true},
    {tipo: "imagem", str: "Imagem", checked: false},
    {tipo: "video", str: "Vídeo", checked: false}
  ]
  
  constructor(public rest: ExemploRestService) { }

  ngOnInit() {
  }

  cadastraPost() {
    let p: any = {
      ids_feedbacks:[],
      usuario: this.usuario,
      titulo: this.titulo,
      tipo_postagem: "letra",
      postagem: this.postagem,
      curtidas:0,
      tags:["Pop","Funk"],
      habilidades:["Compositora"]
    }

    this.rest.addPost(p).subscribe(result => {
      console.log(result);
    });
  }

}
