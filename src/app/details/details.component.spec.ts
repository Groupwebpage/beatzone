import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent],
      providers: [provideRouter([{ path: 'details/:id', component: DetailsComponent }])]
    }).compileComponents();
  });

  it('shows the selected instrument for its details URL', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/details/1', DetailsComponent);

    expect(harness.routeNativeElement?.textContent).toContain('Studio Acoustic Guitar');
    expect(harness.routeNativeElement?.querySelector('.details-image')?.getAttribute('alt'))
      .toBe('Studio Acoustic Guitar');
    expect(harness.routeNativeElement?.querySelector('.details-price')?.textContent).toContain('₱');
  });

  it('adds the selected instrument to the shared cart from the details page', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/details/1', DetailsComponent);

    harness.routeNativeElement?.querySelector<HTMLButtonElement>('.add-to-cart')?.click();
    harness.fixture.detectChanges();

    expect(harness.routeNativeElement?.querySelector('.cart-count')?.textContent?.trim()).toBe('1');
    expect(harness.routeNativeElement?.querySelector('.cart-message')?.textContent)
      .toContain('added to your cart');
  });
});
