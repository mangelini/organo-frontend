import { IOrder } from "../order/types";

export type IInvoice = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  paymentMethod: string;
  paymentStatus: string;
  order: IOrder;
};
