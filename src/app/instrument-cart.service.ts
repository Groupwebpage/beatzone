import { computed, Injectable, signal } from '@angular/core';
import { INSTRUMENTS } from './instrument-data';
import { InstrumentProduct } from './instrument';

@Injectable({ providedIn: 'root' })
export class InstrumentCartService {
  private readonly quantities = signal<Record<number, number>>({});

  readonly items = computed(() =>
    INSTRUMENTS
      .filter((product) => (this.quantities()[product.id] ?? 0) > 0)
      .map((product) => ({ product, quantity: this.quantities()[product.id] ?? 0 }))
  );

  readonly count = computed(() =>
    Object.values(this.quantities()).reduce((total, quantity) => total + quantity, 0)
  );

  readonly total = computed(() =>
    this.items().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );

  add(product: InstrumentProduct): void {
    this.quantities.update((items) => ({
      ...items,
      [product.id]: (items[product.id] ?? 0) + 1
    }));
  }

  changeQuantity(productId: number, change: number): void {
    this.quantities.update((items) => {
      const quantity = (items[productId] ?? 0) + change;
      const updated = { ...items };

      if (quantity > 0) {
        updated[productId] = quantity;
      } else {
        delete updated[productId];
      }

      return updated;
    });
  }
}
