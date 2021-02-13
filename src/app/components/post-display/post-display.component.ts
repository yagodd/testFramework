import { Component, OnInit} from '@angular/core';

// Model
import { PostModel } from '../../models/post.model';
import { UserModel } from '../../models/user.model';
import { CommentModel } from 'src/app/models/comment.model';

// Service
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  posts: PostModel[];
  users: UserModel[];
  comments: CommentModel[];

  constructor(
    private postsService: PostsService,
    private usersService: UsersService
  ) {
    this.getPosts()
  }

  ngOnInit(){
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe( posts => {this.posts = posts; this.setUserName()})
    this.usersService.getUsers()
      .subscribe( users => {this.users = users; this.setUserName()})
  }

  getComments(postId){
    this.postsService.getComments(postId)
      .subscribe( comments => {this.comments = comments;})
  }

  setUserName() {
    if (this.posts && this.users) {
      for(const post of this.posts) {
        for(const user of this.users) {
          if (post.userId === user.id) {
            post.name = user.name
          }
        }
      }
    }
  }
}