import { Component, OnInit, Input } from '@angular/core';
import { ExemploRestService } from 'src/app/service/exemplo-rest.service';
import { ActivatedRoute } from '@angular/router';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  recebePost: any;
  post: any = null;
  usuario: string = '';
  comentario: string = '';
  comentarios: any[] = [];
  faThumbsUp = faThumbsUp;

  constructor(public rest: ExemploRestService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.rest.getPost(id)
      .subscribe(data => {
        this.post = data;
        this.post.ids_feedbacks.forEach(element => {
          this.rest.getFeedback(element).subscribe(data => {
            console.log(data)
            this.comentarios.push(data);
          });
        });
    });
  }

  addNewLines (str) { 
    return str.replace (/\;/g,`\n`);
  }

  curtirPost() {
    this.rest.curtidaPost(this.post.id).subscribe(data => {
      console.log(data);
    });
  }

  curtirFeedBack(id) {
    this.rest.curtidaFeed(id).subscribe(data => {
      console.log(data);
    });
  }

  onComment() {
    let feedback: any = {
      idPost: this.post.id,
      usuario: this.usuario,
      comentario: this.comentario,
      avaliacao_autor: false,
      avaliacao_fas: 0
    }
    this.rest.addFeedback(feedback).subscribe(result => {
      console.log(result);
    });
    this.usuario = '';
    this.comentario = '';
  }
}