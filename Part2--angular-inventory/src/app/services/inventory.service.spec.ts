import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private items: Item[] = [
    {
      id: 'ITEM001',
      name: 'MacBook Pro',
      category: 'Electronics',
      quantity: 12,
      price: 12999,
      supplier: 'Apple Inc.',
      status: 'In Stock',
      popular: true,
      comment: 'High-performance laptop'
    },
    {
      id: 'ITEM002',
      name: 'Office Chair',
      category: 'Furniture',
      quantity: 30,
      price: 899,
      supplier: 'HomeComfort',
      status: 'In Stock',
      popular: false,
      comment: 'Ergonomic design'
    },
    {
      id: 'ITEM003',
      name: 'Wireless Headphones',
      category: 'Electronics',
      quantity: 50,
      price: 1299,
      supplier: 'AudioTech',
      status: 'In Stock',
      popular: true,
      comment: 'Noise cancellation'
    },
    {
      id: 'ITEM004',
      name: 'Cotton T-Shirt',
      category: 'Clothing',
      quantity: 100,
      price: 99,
      supplier: 'FashionBrand',
      status: 'In Stock',
      popular: false,
      comment: '100% cotton'
    },
    {
      id: 'ITEM005',
      name: 'Cordless Drill',
      category: 'Tools',
      quantity: 22,
      price: 499,
      supplier: 'ToolMaster',
      status: 'In Stock',
      popular: true,
      comment: 'Rechargeable'
    },
    {
      id: 'ITEM006',
      name: 'Office Desk',
      category: 'Furniture',
      quantity: 15,
      price: 1299,
      supplier: 'FurnitureWorld',
      status: 'Low Stock',
      popular: false,
      comment: 'Wooden desk'
    },
    {
      id: 'ITEM007',
      name: 'Smart Watch',
      category: 'Electronics',
      quantity: 45,
      price: 2499,
      supplier: 'TechGear',
      status: 'In Stock',
      popular: true,
      comment: 'Health monitoring'
    },
    {
      id: 'ITEM008',
      name: 'Hammer',
      category: 'Tools',
      quantity: 60,
      price: 59,
      supplier: 'ToolPro',
      status: 'In Stock',
      popular: false,
      comment: 'Steel handle'
    },
    {
      id: 'ITEM009',
      name: 'Sneakers',
      category: 'Clothing',
      quantity: 70,
      price: 599,
      supplier: 'SportStyle',
      status: 'In Stock',
      popular: true,
      comment: 'Running shoes'
    },
    {
      id: 'ITEM010',
      name: 'USB Flash Drive 64GB',
      category: 'Miscellaneous',
      quantity: 200,
      price: 89,
      supplier: 'DigitalStore',
      status: 'In Stock',
      popular: false,
      comment: 'Portable storage'
    }
  ];

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  deleteItem(name: string) {
    this.items = this.items.filter(i => i.name !== name);
  }

  search(keyword: string) {
    return this.items.filter(i =>
      i.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}