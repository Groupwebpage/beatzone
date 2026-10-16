import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InstrumentCartComponent } from '../instrument-cart/instrument-cart.component';
import { InstrumentCartService } from '../instrument-cart.service';
import { INSTRUMENTS } from '../instrument-data';

@Component({
  selector: 'app-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, InstrumentCartComponent, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly cart = inject(InstrumentCartService);
  private readonly routeParams = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap
  });

  protected readonly product = computed(() => {
    const id = Number(this.routeParams().get('id'));
    return INSTRUMENTS.find((instrument) => instrument.id === id);
  });

  protected readonly cartMessage = signal('');

  protected addToCart(): void {
    const product = this.product();
    if (!product) {
      return;
    }

    this.cart.add(product);
    this.cartMessage.set(`${product.name} added to your cart.`);
  }
}
