import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

interface Place {
  id: number;
  name: string;
}

interface ResponseData {
  places: Place[];
}

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(
    private errorService: ErrorService,
    private httpClient: HttpClient
  ) {}

  loadPlaces() {
    return this.fetchPlaces('assets/places.json', 'Something wrong fetching');
  }

  fetchPlaces(path: string, errorMsg: string) {
    return this.httpClient.get<ResponseData>(path).pipe(
      map((resData) => resData),
      catchError((err) => {
        this.errorService.showError(errorMsg);
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
