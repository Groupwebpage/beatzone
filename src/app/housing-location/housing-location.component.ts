import { Component, ElementRef, Input, viewChild } from '@angular/core';
import { HousingLocation } from '../housing';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  protected readonly detailsDialog = viewChild.required<ElementRef<HTMLDialogElement>>('detailsDialog');

  protected openDetails(): void {
    this.detailsDialog().nativeElement.showModal();
  }

  protected closeDetails(): void {
    this.detailsDialog().nativeElement.close();
  }

  protected closeOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeDetails();
    }
  }
}
