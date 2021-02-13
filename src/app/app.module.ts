import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { PostDisplayComponent } from './components/post-display/post-display.component';

import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { AlbumsService } from './services/albums.service';
import { PhotosService } from './services/photos.service';
import { TodosService } from './services/todos.service';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatExpansionModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatBadgeModule,
  MatDividerModule,
  MatChipsModule
} from '@angular/material';

import { PostsComponent } from './pages/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumComponent, DialogElementsPhotos, DialogPhoto } from './components/album/album.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoComponent, DialogTodo } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDisplayComponent,
    PostsComponent,
    HomeComponent,
    AlbumsComponent,
    AlbumComponent,
    DialogElementsPhotos,
    DialogPhoto,
    TodosComponent,
    TodoComponent,
    DialogTodo
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatBadgeModule,
    MatDividerModule,
    MatChipsModule
  ],
  entryComponents: [DialogElementsPhotos, DialogPhoto, DialogTodo],
  providers: [PostsService, UsersService, AlbumsService, PhotosService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
