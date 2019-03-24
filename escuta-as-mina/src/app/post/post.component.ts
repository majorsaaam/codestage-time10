import { Component, OnInit, Input } from '@angular/core';
import { ExemploRestService } from 'src/app/service/exemplo-rest.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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

  constructor(public rest: ExemploRestService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.rest.getPost(id)
      .subscribe(data => {
        this.post = data;
        console.log(this.post);
    });
  }

  addNewLines (str) { 
    return str.replace (/\;/g,`\n`);
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