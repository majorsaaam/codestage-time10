import { Component, OnInit } from '@angular/core';
import { ExemploRestService } from 'src/app/service/exemplo-rest.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
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