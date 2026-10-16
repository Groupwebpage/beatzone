import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InstrumentCartComponent } from '../instrument-cart/instrument-cart.component';
import { INSTRUMENTS } from '../instrument-data';
import { InstrumentCardComponent } from '../instrument-card/instrument-card.component';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InstrumentCardComponent, InstrumentCartComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected readonly searchText = signal('');
  protected readonly query = signal('');
  protected readonly products = INSTRUMENTS;
  protected readonly categories = ['All instruments', ...new Set(INSTRUMENTS.map((product) => product.category))];
  protected readonly selectedCategory = signal('All instruments');

  protected readonly filteredProducts = computed(() => {
    const term = this.query().trim().toLowerCase();
    const category = this.selectedCategory();

    return this.products.filter((product) => {
      const matchesSearch = !term
        || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(term);
      const matchesCategory = category === 'All instruments' || product.category === category;
      return matchesSearch && matchesCategory;
    });
  });

  protected updateSearch(event: Event): void {
    this.searchText.set((event.target as HTMLInputElement).value);
  }

  protected applySearch(event: Event): void {
    event.preventDefault();
    this.query.set(this.searchText().trim());
  }

  protected clearSearch(): void {
    this.searchText.set('');
    this.query.set('');
  }

  protected selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
