import { IOrderItem } from "../orderItem/types";
import { IInvoice } from "../invoice/types";

export type IOrder = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  orderItems: IOrderItem[];
  invoices: IInvoice[];
};

export type IOrderCreate = {
  userId: number;
};
