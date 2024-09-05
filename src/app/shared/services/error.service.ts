import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error = '';
  error$ = new BehaviorSubject<string>(this.error);

  showError(msg: string) {
    this.error = msg;
    this.error$.next(this.error);
  }

  clearError() {
    this.error = '';
    this.error$.next(this.error);
  }
}
