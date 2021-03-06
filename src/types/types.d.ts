export interface IPizza {
  _id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  marca: number;
}

export type CartItem = {
  _id: string;
  variation: VariationItem;
  imageUrl: string;
  name: string;
  type: string;
  size: number;
  price: number;
  category: number;
  marca: number;
};

export type VariationItem = {
  id: string;
  type: string;
  size: number;
  count: number;
  variationPrice: number;
};

export type Order = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  time: string;
  order: OrderCartData[];
  orderTimeSent: string;
  totalPrice: number;
};

export type OrderCartData = {
  name: string;
  variationId: string;
  count: number;
  price: number;
  size: number;
  type: string;
};
