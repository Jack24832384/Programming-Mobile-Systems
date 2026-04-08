/*
  Author: Yansong Li
  Student ID: 24832384
*/
import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item-manage',
  templateUrl: './item-manage.component.html',
  styleUrls: ['./item-manage.component.css']
})
export class ItemManageComponent {
  // Product form fields
  id = '';
  name = '';
  category = 'Electronics';
  quantity = 0;
  price = 0;
  supplier = '';
  status = 'In Stock';
  popular = false;
  comment = '';

  // Inject inventory service (public for template access)
  constructor(public inv: InventoryService) {}

  // Save new product to inventory
  save() {
    const item: Item = {
      id: this.id,
      name: this.name,
      category: this.category,
      quantity: this.quantity,
      price: this.price,
      supplier: this.supplier,
      status: this.status,
      popular: this.popular,
      comment: this.comment
    };
    this.inv.addItem(item);
  }

  // Delete product by name
  delete(name: string) {
    this.inv.deleteItem(name);
  }
}