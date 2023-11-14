import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navbar$ = new BehaviorSubject<boolean>(false);
  currentNavbar$ = this.navbar$.asObservable();

  setNavbar(estate:boolean){
   this.navbar$.next(estate);
  }
}
