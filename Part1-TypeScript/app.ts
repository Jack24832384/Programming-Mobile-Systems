/**
 * PROG2005 - Assignment Part 1
 * Inventory Management System
 * TypeScript Implementation with Preloaded Products
 * Author: Your Name
 * Student ID: Your ID
 */

// ------------------------------
// 1. Type Interface (Strict Model)
// ------------------------------
interface InventoryItem {
  itemId: string;
  itemName: string;
  category: 'Electronics' | 'Furniture' | 'Clothing' | 'Tools' | 'Miscellaneous';
  quantity: number;
  price: number;
  supplier: string;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  popularItem: 'Yes' | 'No';
  comment: string;
}

// ------------------------------
// 2. Preloaded Inventory (Auto-load on open)
// ------------------------------
let inventory: InventoryItem[] = [
  // Electronics
  {
    itemId: "E001",
    itemName: "Wireless Earbuds",
    category: "Electronics",
    quantity: 35,
    price: 89.99,
    supplier: "TechPro Supplies",
    stockStatus: "In Stock",
    popularItem: "Yes",
    comment: "Noise-cancelling, best-seller"
  },
  {
    itemId: "E002",
    itemName: "10000mAh Power Bank",
    category: "Electronics",
    quantity: 60,
    price: 29.99,
    supplier: "ChargeMaster",
    stockStatus: "In Stock",
    popularItem: "No",
    comment: "Portable fast-charging"
  },
  // Furniture
  {
    itemId: "F001",
    itemName: "Ergonomic Office Chair",
    category: "Furniture",
    quantity: 15,
    price: 129.99,
    supplier: "HomeComfort Furniture",
    stockStatus: "In Stock",
    popularItem: "Yes",
    comment: "Lumbar support for long hours"
  },
  // Clothing
  {
    itemId: "C001",
    itemName: "Cotton Crewneck T-Shirt",
    category: "Clothing",
    quantity: 100,
    price: 15.99,
    supplier: "FashionPlus Apparel",
    stockStatus: "In Stock",
    popularItem: "Yes",
    comment: "Soft, breathable fabric"
  },
  // Tools
  {
    itemId: "T001",
    itemName: "10-Piece Screwdriver Set",
    category: "Tools",
    quantity: 45,
    price: 19.99,
    supplier: "ToolMaster Hardware",
    stockStatus: "In Stock",
    popularItem: "No",
    comment: "Magnetic tips, durable"
  },
  // Miscellaneous
  {
    itemId: "M001",
    itemName: "Stainless Steel Water Bottle",
    category: "Miscellaneous",
    quantity: 70,
    price: 12.99,
    supplier: "LifeStyle Goods",
    stockStatus: "In Stock",
    popularItem: "Yes",
    comment: "Leak-proof, insulated"
  }
];

// ------------------------------
// 3. Global State
// ------------------------------
const messageEl = document.getElementById('message') as HTMLDivElement;

// ------------------------------
// 4. Message Helper (No alert!)
// ------------------------------
function showMessage(text: string, isError = false): void {
  messageEl.textContent = text;
  messageEl.className = `message ${isError ? 'error' : 'success'}`;
  setTimeout(() => {
    messageEl.className = 'message';
  }, 3500);
}

// ------------------------------
// 5. Clear Form
// ------------------------------
function clearForm(): void {
  (document.getElementById('inventoryForm') as HTMLFormElement).reset();
}

// ------------------------------
// 6. Validate Inputs
// ------------------------------
function validateInputs(
  id: string,
  name: string,
  cat: string,
  qty: number,
  price: number,
  supplier: string
): boolean {
  if (!id || !name || !cat || qty < 0 || price < 0 || !supplier) {
    showMessage('Please fill all required fields correctly!', true);
    return false;
  }
  if (inventory.some(item => item.itemId === id)) {
    showMessage('Item ID already exists!', true);
    return false;
  }
  return true;
}

// ------------------------------
// 7. Save / Update Item
// ------------------------------
function saveItem(): void {
  const itemId = (document.getElementById('itemId') as HTMLInputElement).value.trim();
  const itemName = (document.getElementById('itemName') as HTMLInputElement).value.trim();
  const category = (document.getElementById('category') as HTMLSelectElement).value as InventoryItem['category'];
  const quantity = Number((document.getElementById('quantity') as HTMLInputElement).value);
  const price = Number((document.getElementById('price') as HTMLInputElement).value);
  const supplier = (document.getElementById('supplier') as HTMLInputElement).value.trim();
  const stockStatus = (document.getElementById('stockStatus') as HTMLSelectElement).value as InventoryItem['stockStatus'];
  const popularItem = (document.getElementById('popularItem') as HTMLSelectElement).value as InventoryItem['popularItem'];
  const comment = (document.getElementById('comment') as HTMLTextAreaElement).value.trim();

  // Validation
  if (!validateInputs(itemId, itemName, category, quantity, price, supplier)) return;

  // Create item object
  const newItem: InventoryItem = {
    itemId,
    itemName,
    category,
    quantity,
    price,
    supplier,
    stockStatus,
    popularItem,
    comment
  };

  // Update or Add
  const index = inventory.findIndex(i => i.itemName.toLowerCase() === itemName.toLowerCase());
  if (index >= 0) {
    inventory[index] = newItem;
    showMessage('Item updated successfully!');
  } else {
    inventory.push(newItem);
    showMessage('Item added successfully!');
  }

  clearForm();
  renderItems(inventory);
}

// ------------------------------
// 8. Render Items to UI
// ------------------------------
function renderItems(items: InventoryItem[]): void {
  const listEl = document.getElementById('itemList') as HTMLDivElement;
  listEl.innerHTML = '';

  if (items.length === 0) {
    listEl.innerHTML = '<p style="text-align:center; color:#7f8c8d;">No items to display.</p>';
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <strong>${item.itemName}</strong> (ID: ${item.itemId})<br>
      Category: ${item.category} | Qty: ${item.quantity} | Price: $${item.price.toFixed(2)}<br>
      Supplier: ${item.supplier} | Stock: ${item.stockStatus} | Popular: ${item.popularItem}<br>
      Comment: ${item.comment || 'N/A'}<br>
      <button onclick="deleteItem('${item.itemName}')">Delete</button>
    `;
    listEl.appendChild(card);
  });
}

// ------------------------------
// 9. Delete Item (Confirm)
// ------------------------------
function deleteItem(name: string): void {
  if (!confirm(`Are you sure you want to delete: ${name}?`)) return;
  inventory = inventory.filter(i => i.itemName.toLowerCase() !== name.toLowerCase());
  showMessage('Item deleted successfully!');
  renderItems(inventory);
}

// ------------------------------
// 10. Search by Name
// ------------------------------
function searchItems(): void {
  const keyword = (document.getElementById('searchInput') as HTMLInputElement).value.toLowerCase();
  const filtered = inventory.filter(i => i.itemName.toLowerCase().includes(keyword));
  renderItems(filtered);
}

// ------------------------------
// 11. Show All / Show Popular
// ------------------------------
function showAll(): void { renderItems(inventory); }
function showPopular(): void { renderItems(inventory.filter(i => i.popularItem === 'Yes')); }

// ------------------------------
// 12. Bind Events
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('saveBtn')!.addEventListener('click', saveItem);
  document.getElementById('clearBtn')!.addEventListener('click', clearForm);
  document.getElementById('showAllBtn')!.addEventListener('click', showAll);
  document.getElementById('showPopularBtn')!.addEventListener('click', showPopular);
  document.getElementById('searchInput')!.addEventListener('input', searchItems);
  renderItems(inventory);
});