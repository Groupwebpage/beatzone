import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, effect, inject, viewChild } from '@angular/core';
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

  private readonly dialogState = effect(() => {
    const dialog = this.cartDialog();
    const isOpen = this.cart.isCartOpen();

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.nativeElement.open) {
      dialog.nativeElement.showModal();
    }

    if (!isOpen && dialog.nativeElement.open) {
      dialog.nativeElement.close();
    }
  });

  protected openCart(): void {
    this.cart.openCart();
  }

  protected closeCart(): void {
    this.cart.closeCart();
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
