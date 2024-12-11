import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedImports } from './shared-imports';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedImports],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  products: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'OUTSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'OUTSTOCK',
      rating: 5,
    },
  ];

  inventoryStatusOptions: any[] = [
    { label: 'All', value: null },
    { label: 'In Stock', value: 'INSTOCK' },
    { label: 'Out of Stock', value: 'OUTSTOCK' },
  ];

  selectedInventoryStatus: string | null = null;

  filteredProducts: any[] = [...this.products];

  searchValue: string = '';

  contructor() {}

  filterTable(): void {
    if (this.selectedInventoryStatus) {
      this.filteredProducts = this.products.filter(
        (product) => product.inventoryStatus === this.selectedInventoryStatus
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
    this.selectedInventoryStatus = null;
    this.filteredProducts = [...this.products];
  }
}
