import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { InstrumentCartService } from '../instrument-cart.service';

@Component({
  selector: 'app-instrument-cart',
  imports: [CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './instrument-cart.component.html',
  styleUrl: './instrument-cart.component.css'
})
export class InstrumentCartComponent {
  protected readonly cart = inject(InstrumentCartService);
  protected readonly cartDialog = viewChild.required<ElementRef<HTMLDialogElement>>('cartDialog');

  protected openCart(): void {
    this.cartDialog().nativeElement.showModal();
  }

  protected closeCart(): void {
    this.cartDialog().nativeElement.close();
  }

  protected closeOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeCart();
    }
  }

  protected removeItem(productId: number, quantity: number): void {
    this.cart.changeQuantity(productId, -quantity);
  }
}
