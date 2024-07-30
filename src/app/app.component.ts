import { Component } from '@angular/core';
import { PictureModalService } from './services/picture-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LUFIT.PRO';
  icon: boolean = false;
  isOpen: boolean = false;
  isGalleryOpen: boolean = false;

  constructor(private pictureModalService: PictureModalService) {}

  ngOnInit() {
    this.pictureModalService.getIsOpen().subscribe({
      next: (res) => {
        this.isGalleryOpen = res;
      },
    });
  }

  onOpenMenu(event: boolean) {
    this.isOpen = event;
    this.icon = event;
  }
}
