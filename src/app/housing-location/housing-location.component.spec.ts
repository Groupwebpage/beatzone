import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingLocationComponent } from './housing-location.component';

describe('HousingLocationComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;
    component.housingLocation = {
      id: 1,
      name: 'Test Home',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://example.com/photo.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a labelled home-details dialog', () => {
    const dialog = fixture.nativeElement.querySelector('dialog') as HTMLDialogElement;

    expect(dialog.hasAttribute('open')).toBe(false);
    expect(dialog.getAttribute('aria-labelledby')).toBe('home-title-1');
    expect(dialog.textContent).toContain('1 units available');
    expect(dialog.textContent).toContain('Wi-Fi: Available');
  });
});
