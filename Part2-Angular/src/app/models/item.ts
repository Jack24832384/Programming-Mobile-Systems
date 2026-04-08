/*
  Author: Yansong Li
  Student ID: 24832384
*/
export interface Item {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  supplier: string;
  status: string;
  popular: boolean;
  comment?: string;
}