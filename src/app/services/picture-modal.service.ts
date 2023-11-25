import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PictureModalComponent } from '../components/picture-modal/picture-modal.component';

@Injectable({
  providedIn: 'root',
})
export class PictureModalService {

  constructor(private dialog: MatDialog) {}

  open(picture: string) {
    this.dialog.open(PictureModalComponent, { data: { pictureUrl: picture } });
  }
}
