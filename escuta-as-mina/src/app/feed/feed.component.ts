import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/feed.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: any = null
  faThumbsUp = faThumbsUp;

  constructor(public service: PostService, private router: Router) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(data => {
        console.log(data);
        this.posts = data;
      });
  }

  navigateToPost(id: string) {
    this.router.navigate(['/post', id]);
  }

}
