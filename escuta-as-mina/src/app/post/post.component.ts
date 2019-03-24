import { Component, OnInit } from '@angular/core';
import { ExemploRestService } from 'src/app/service/exemplo-rest.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any = null;

  constructor(public rest: ExemploRestService) { }

  ngOnInit() {
    this.rest.getPost("5c9726c49ad40a141497528e")
      .subscribe(data => {
        this.post = data;
        console.log(this.post);
    });
  }
}