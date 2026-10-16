import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InstrumentProduct } from '../instrument';

@Component({
  selector: 'app-instrument-card',
  imports: [CurrencyPipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './instrument-card.component.html',
  styleUrl: './instrument-card.component.css'
})
export class InstrumentCardComponent {
  readonly product = input.required<InstrumentProduct>();
}
