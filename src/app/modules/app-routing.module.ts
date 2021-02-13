import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { PostsComponent } from '../pages/posts/posts.component';
import { AlbumsComponent } from '../pages/albums/albums.component';
import { TodosComponent } from '../pages/todos/todos.component';
// import { AboutComponent } from '../pages/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'todos', component: TodosComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }