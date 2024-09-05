import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorModalComponent } from './shared/components/modal/error-modal/error-modal.component';
import { ErrorService } from './shared/services/error.service';
import { Subscription } from 'rxjs';
import { TablesComponent } from './tables/tables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ErrorModalComponent, TablesComponent],
})
export class AppComponent implements OnInit, OnDestroy {
  error!: string;
  private subscription!: Subscription;

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.subscription = this.errorService.error$.subscribe((value) => {
      this.error = this.error;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
