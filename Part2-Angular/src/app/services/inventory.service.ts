/*
  Author: Yansong Li
  Student ID: 24832384
*/
import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  // Preloaded 6 unique products
  private items: Item[] = [
    {
      id: 'INV01',
      name: 'Portable Solar Charger 20W',
      category: 'Electronics',
      quantity: 18,
      price: 329,
      supplier: 'GreenEnergy Tech',
      status: 'In Stock',
      popular: true,
      comment: 'Waterproof outdoor solar charger'
    },
    {
      id: 'INV02',
      name: 'Bamboo Standing Desk Mat',
      category: 'Furniture',
      quantity: 12,
      price: 189,
      supplier: 'EcoLiving Supplies',
      status: 'In Stock',
      popular: false,
      comment: 'Anti-fatigue mat for standing desks'
    },
    {
      id: 'INV03',
      name: 'Smart Plant Watering Sensor',
      category: 'Electronics',
      quantity: 25,
      price: 159,
      supplier: 'SmartGarden Labs',
      status: 'In Stock',
      popular: true,
      comment: 'Monitors soil moisture automatically'
    },
    {
      id: 'INV04',
      name: 'Quick-Dry Travel Beach Towel',
      category: 'Clothing',
      quantity: 42,
      price: 79,
      supplier: 'WanderOutdoor Co.',
      status: 'In Stock',
      popular: false,
      comment: 'Lightweight & fast drying'
    },
    {
      id: 'INV05',
      name: 'Magnetic Wristband for Screws',
      category: 'Tools',
      quantity: 30,
      price: 45,
      supplier: 'ToolFix Innovations',
      status: 'In Stock',
      popular: true,
      comment: 'Holds screws while repairing'
    },
    {
      id: 'INV06',
      name: 'Mini Air Dehumidifier',
      category: 'Miscellaneous',
      quantity: 9,
      price: 269,
      supplier: 'CleanAir Electronics',
      status: 'Low Stock',
      popular: false,
      comment: 'For closets & small rooms'
    }
  ];

  // Get all items
  getItems() {
    return this.items;
  }

  // Add new item
  addItem(item: Item) {
    this.items.push(item);
  }

  // Delete item by name
  deleteItem(name: string) {
    this.items = this.items.filter(i => i.name !== name);
  }

  // Search items by keyword
  search(keyword: string) {
    return this.items.filter(i =>
      i.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}