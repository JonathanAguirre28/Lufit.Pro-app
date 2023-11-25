import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-picture-modal',
  templateUrl: './picture-modal.component.html',
  styleUrls: ['./picture-modal.component.scss'],
})
export class PictureModalComponent implements OnInit {
  picture: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: { pictureUrl: string }) {}
  ngOnInit() {
    this.picture = this.data.pictureUrl;
    console.log(this.picture);
  }
}
