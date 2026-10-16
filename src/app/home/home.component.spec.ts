import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows ten instruments and filters by category when submitted', () => {
    expect(fixture.nativeElement.querySelectorAll('app-instrument-card').length).toBe(10);

    const input = fixture.nativeElement.querySelector('#product-search') as HTMLInputElement;
    input.value = '  strings  ';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    fixture.nativeElement.querySelector('form').dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('app-instrument-card').length).toBe(2);
    expect(fixture.nativeElement.textContent).toContain('Concert Violin');
    expect(fixture.nativeElement.textContent).toContain('Concert Ukulele');
  });

  it('filters the catalog by category and combines it with search', () => {
    const stringsFilter = Array.from(
      fixture.nativeElement.querySelectorAll('.category-filter') as NodeListOf<HTMLButtonElement>
    ).find((button) => button.textContent?.trim() === 'Strings');
    stringsFilter?.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('app-instrument-card').length).toBe(2);

    const input = fixture.nativeElement.querySelector('#product-search') as HTMLInputElement;
    input.value = 'ukulele';
    input.dispatchEvent(new Event('input'));
    fixture.nativeElement.querySelector('form').dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('app-instrument-card').length).toBe(1);
    expect(fixture.nativeElement.textContent).toContain('Concert Ukulele');
    expect(stringsFilter?.getAttribute('aria-pressed')).toBe('true');
  });

  it('links a product image to its details page', () => {
    const link = fixture.nativeElement.querySelector('.product-image-link') as HTMLAnchorElement;

    expect(link.getAttribute('href')).toBe('/details/1');
  });

  it('links the main navigation to the catalog and story sections', () => {
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('.main-nav a') as NodeListOf<HTMLAnchorElement>
    );

    expect(links.map((link) => link.getAttribute('href'))).toEqual(['/#catalog', '/#about']);
  });

  it('displays product prices in pesos', () => {
    expect(fixture.nativeElement.querySelector('.price').textContent).toContain('₱');
  });

  it('clears the applied instrument search filter', () => {
    const input = fixture.nativeElement.querySelector('#product-search') as HTMLInputElement;
    input.value = 'violin';
    input.dispatchEvent(new Event('input'));
    fixture.nativeElement.querySelector('form').dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.clear-search').click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('app-instrument-card').length).toBe(10);
  });
});
