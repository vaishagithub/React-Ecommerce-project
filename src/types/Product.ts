export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
//   quantity?: number;
}
export interface CartItem extends Product {
  quantity: number;
}
