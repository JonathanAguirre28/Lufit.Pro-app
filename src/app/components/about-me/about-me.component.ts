import { Component } from '@angular/core';
import { PictureModalService } from 'src/app/services/picture-modal.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  constructor(private pictureModalService: PictureModalService) {}
  openModal(picture: string) {
    this.pictureModalService.open(picture);
  }
}
