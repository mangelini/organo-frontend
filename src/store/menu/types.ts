import { IFood } from "../food/types";

export type IMenu = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  category: string;
  foods: IFood[];
};
