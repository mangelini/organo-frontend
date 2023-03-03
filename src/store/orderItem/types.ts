import { IFood } from "../food/types";

export type IOrderItem = {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  quantity: number;
  unitPrice: number;
  food: IFood;
};
export type IOrderItemCreate = {
  quantity: number;
  unitPrice: number;
  orderId: number;
  foodId: number;
};
