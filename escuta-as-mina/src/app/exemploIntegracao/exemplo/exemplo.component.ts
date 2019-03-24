import { Component, OnInit } from '@angular/core';
import { ExemploRestService } from 'src/app/service/exemplo-rest.service';

@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css']
})
export class ExemploComponent implements OnInit {

  post: any = null;
  posts: any = null;

  feedback: any = {
    idPost: "5c96d3c7178d0530ec337cb9", //Esse ID é o do post.id
    usuario: "Eduardo",
    comentario: "Esse cara é de mais!!!",
    avaliacao_autor: false,
    avaliacao_fas: 0
  }

  constructor(public rest: ExemploRestService) { }

  ngOnInit() {
    // Esse id é gerado no backend mas é possível pegar pelo post.id
    this.rest.getPost("5c96d3c7178d0530ec337cb9")
      .subscribe(data => {
        this.post = data;
      });
    
    this.rest.getPosts()
      .subscribe(data => {
        this.posts = data;
    })

    //adiciona feedback/comentario
    // OBS: esta colocando na tabela sempre que entra na pagina kkk
    this.rest.addFeedback(this.feedback).subscribe(result => {
      console.log(result);
    });
  }

}
