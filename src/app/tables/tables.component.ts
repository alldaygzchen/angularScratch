import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlacesService } from '../shared/services/places.service';
import { Subscription } from 'rxjs';

interface Place {
  id: number;
  name: string;
}

interface ResponseData {
  places: Place[];
}

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export class TablesComponent implements OnInit, OnDestroy {
  places!: ResponseData;
  isFetching = false;
  error = '';
  private subscription!: Subscription;

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.isFetching = true;
    this.subscription = this.placesService.loadPlaces().subscribe({
      next: (places) => {
        console.log(places);
        this.places = places.places;
      },
      error: (error: Error) => {
        this.error = error.message;
      },
      complete: () => {
        this.isFetching = true;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
