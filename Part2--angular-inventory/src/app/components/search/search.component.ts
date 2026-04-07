import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  keyword = '';
  results: any[] = [];

  constructor(public inv: InventoryService) {}

  search() {
    this.results = this.inv.search(this.keyword);
  }
}