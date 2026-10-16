# Tone & Timber

## Project overview

Tone & Timber is a responsive single-page instrument shop concept. It helps beginner and
experienced musicians explore a sample catalog, learn about instruments, and keep track of
items they are considering.

**Purpose:** make browsing a small instrument catalog and comparing options straightforward.  
**Target users:** students, beginner musicians, and anyone exploring music equipment.

## Project objectives

- Build a single-page application with Angular, TypeScript, HTML, and CSS.
- Divide the experience into reusable Angular components.
- Use data binding, event handling, conditional rendering, and dynamic lists.
- Provide responsive layouts and keyboard-accessible interactive controls.
- Demonstrate navigation, search, filtering, and a working shopping cart.

## Features

1. **Instrument catalog:** browse ten sample instruments with descriptions, categories, and prices.
2. **Search:** find instruments by name, category, or description.
3. **Category filters:** filter the catalog by instrument family; category and search filters combine.
4. **Product details:** open an instrument's detail page through Angular Router.
5. **Shopping cart:** add instruments, change quantities, remove items, and view the subtotal.
6. **Responsive layout:** product cards, navigation, catalog, and cart adapt to smaller screens.

The catalog and cart use in-memory sample data; there is no backend or checkout service.

## Angular components and structure

- `src/app/app.ts` — application shell and router outlet.
- `src/app/home/` — catalog page, search, category filters, and informational section.
- `src/app/instrument-card/` — reusable instrument listing card.
- `src/app/details/` — routed product details and add-to-cart interaction.
- `src/app/instrument-cart/` — cart dialog and quantity controls.
- `src/app/instrument-cart.service.ts` — shared reactive cart state and subtotal calculation.
- `src/app/instrument-data.ts` and `src/app/instrument.ts` — sample products and product type.
- `src/app/app.routes.ts` — lazy-loaded catalog and product detail routes.

Angular signals hold the search and selected-category state; computed signals derive filtered
products and cart totals. The interface uses standalone components, native Angular control
flow, and semantic buttons and navigation landmarks.

## Technologies

- Angular 21
- TypeScript
- HTML and CSS
- Angular Router
- Vitest through the Angular CLI unit-test builder

## Run the application

Install dependencies, then start the development server:

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Test and build

```bash
npm test
npm run build
```

## Demonstration and screenshot checklist

For a project presentation or submission, capture screenshots of:

1. The catalog and responsive navigation in a browser.
2. A category filter and a search result.
3. A product detail page.
4. The cart showing quantity controls and a calculated subtotal.
5. The Angular project structure in the editor.

Suggested demonstration: introduce the target users and catalog, show search and category
filtering, open a product detail, add it to the cart, change its quantity, and explain how the
shared service updates the item count and subtotal.
