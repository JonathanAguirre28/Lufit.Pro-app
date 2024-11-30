import { Component } from '@angular/core';
import { PictureModalService } from './services/picture-modal.service';
import { Router } from '@angular/router';

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

  constructor(private pictureModalService: PictureModalService, private router:Router) {}

  ngOnInit() {
    this.pictureModalService.getIsOpen().subscribe({
      next: (res) => {
        this.isGalleryOpen = res;
      },
    });
    if (window.location.hash) {
      this.router.navigate([], {
        queryParams: {},
        fragment: undefined,
        replaceUrl: true,
      });
    }
  }

  onOpenMenu(event: boolean) {
    this.isOpen = event;
    this.icon = event;
  }
}
