import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InstrumentCartComponent } from '../instrument-cart/instrument-cart.component';
import { InstrumentCartService } from '../instrument-cart.service';
import { INSTRUMENTS } from '../instrument-data';

@Component({
  selector: 'app-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, InstrumentCartComponent, ReactiveFormsModule, RouterLink],
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
  private readonly detailsDialog = viewChild.required<ElementRef<HTMLDialogElement>>('detailsDialog');

  protected readonly detailsForm = new FormGroup({
    fullName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    phone: new FormControl('', { nonNullable: true }),
    address: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] }),
    notes: new FormControl('', { nonNullable: true })
  });

  protected openDetailsForm(): void {
    this.detailsDialog().nativeElement.showModal();
  }

  protected closeDetailsForm(): void {
    this.detailsDialog().nativeElement.close();
  }

  protected closeOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeDetailsForm();
    }
  }

  protected addToCart(): void {
    if (this.detailsForm.invalid) {
      this.detailsForm.markAllAsTouched();
      return;
    }

    const product = this.product();
    if (!product) {
      return;
    }

    const details = this.detailsForm.getRawValue();
    this.cart.saveCustomerDetails({
      fullName: details.fullName.trim(),
      email: details.email.trim(),
      phone: details.phone.trim() || 'Not provided',
      address: details.address.trim(),
      notes: details.notes.trim() || 'No special requests'
    });

    this.cart.add(product);
    this.closeDetailsForm();
    this.cart.openCart();
    this.cartMessage.set(`${product.name} added to your cart.`);
    this.detailsForm.reset();
  }
}
