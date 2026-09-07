import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  imports: [],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

  photos = [
    '/images/1.jpeg',
    '/images/2.jpeg',
    '/images/3.jpeg',
    '/images/4.jpeg',
    '/images/5.jpeg',
    '/images/6.jpeg',
    '/images/7.jpeg',
    '/images/8.jpeg',
    '/images/9.jpeg',
    '/images/10.jpeg'
  ];

  currentPhotoIndex = 0;

  nextPhotos() {
    this.currentPhotoIndex++;

    if (this.currentPhotoIndex >= this.photos.length) {
      this.currentPhotoIndex = 0;
    }
  }

  previousPhotos() {
    this.currentPhotoIndex--;

    if (this.currentPhotoIndex < 0) {
      this.currentPhotoIndex = this.photos.length - 1;
    }
  }

  get visiblePhotos() {
    return [
      this.photos[this.currentPhotoIndex],
      this.photos[(this.currentPhotoIndex + 1) % this.photos.length],
      this.photos[(this.currentPhotoIndex + 2) % this.photos.length]
    ];
  }

}
