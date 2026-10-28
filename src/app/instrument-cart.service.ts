import { computed, Injectable, signal } from '@angular/core';
import { INSTRUMENTS } from './instrument-data';
import { InstrumentProduct } from './instrument';

export interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
}

@Injectable({ providedIn: 'root' })
export class InstrumentCartService {
  private readonly quantities = signal<Record<number, number>>({});
  private readonly cartOpen = signal(false);
  readonly customerDetails = signal<CustomerDetails | null>(null);

  readonly isCartOpen = this.cartOpen.asReadonly();

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

  saveCustomerDetails(details: CustomerDetails): void {
    this.customerDetails.set(details);
  }

  openCart(): void {
    this.cartOpen.set(true);
  }

  closeCart(): void {
    this.cartOpen.set(false);
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
