import { Component, OnInit, Input } from '@angular/core';
import { ExemploRestService } from 'src/app/service/exemplo-rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  recebePost: any;
  post: any = null;

  constructor(public rest: ExemploRestService, private route: ActivatedRoute) { }

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
    //return str.replace (/(?!$|\n)([^\n]{50}(?!\n))/g, '$1\n');
}
}