import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// Model
import { AlbumModel } from '../../models/album.model';
import { PhotoModel } from '../../models/photo.model';
import { UserModel } from 'src/app/models/user.model';

// Service
import { AlbumsService } from '../../services/albums.service';
import { PhotosService } from '../../services/photos.service';
import { UsersService } from 'src/app/services/users.service';

export interface DialogData {
  id: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums: AlbumModel[];
  photos: PhotoModel[];
  users: UserModel[];

  constructor(
    private albumsService: AlbumsService,
    private photosService: PhotosService,
    private usersService: UsersService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAlbums();
  }

  openDialog(albumID, albumTitle) {
    this.dialog.open(DialogElementsPhotos, {
      data: {id: albumID, title: albumTitle}
    });
  }

  getAlbums(){
    this.albumsService.getAlbums()
      .subscribe(albums => this.albums = albums)
    this.photosService.getPhotos()
      .subscribe(photos => {this.photos = photos; this.setThumbnailUrl()})
    this.usersService.getUsers()
    .subscribe( users => {this.users = users; this.setUserName()})
  }

  //Prenche o campo adicional "thumbnailUrl" no model Albums
  setThumbnailUrl() {
    if (this.albums && this.photos) {
      for(const albums of this.albums) {
        for(const photos of this.photos) {
          if (albums.id === photos.albumId) {
            albums.thumbnailUrl = photos.thumbnailUrl;
            break;
          }
        }
      }
    }
  }

//Prenche o campo adicional "name" no model Albums
  setUserName() {
    if (this.albums && this.users) {
      for(const albums of this.albums) {
        for(const user of this.users) {
          if (albums.userId === user.id) {
            albums.name = user.name
          }
        }
      }
    }
  }
}

///Esse componente pertence ao MODAL de Albums
@Component({
  selector: 'dialog-elements-photos',
  templateUrl: './dialog-elements-photos.html',
  styleUrls: ['./album.component.css']
})
export class DialogElementsPhotos {

  photosAlbum: PhotoModel[];
  
  constructor(
    public dialogRef: MatDialogRef<DialogElementsPhotos>,
    private photosService: PhotosService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit(){
      this.getPhotoByAlbum();
    }

    getPhotoByAlbum() {
      this.photosService.getPhotoByAlbum(this.data.id)
        .subscribe(photos => {this.photosAlbum = photos})
    }

    openDialogPhoto(photoUrl) {
      this.dialog.open(DialogPhoto, {
        data: {url: photoUrl}
      });
    }
}

///Esse componente pertence ao MODAL de cada foto
@Component({
  selector: 'dialog-photo',
  templateUrl: './dialog-photo.html',
  styleUrls: ['./album.component.css']
})
export class DialogPhoto {
  
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}