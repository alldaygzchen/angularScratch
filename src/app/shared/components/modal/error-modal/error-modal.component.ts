import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal.component';
import { ErrorService } from '../../../services/error.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css',
})
export class ErrorModalComponent {
  error!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) message!: string;

  constructor(private errorService: ErrorService) {}

  onClearError() {
    this.errorService.clearError();
  }
}
