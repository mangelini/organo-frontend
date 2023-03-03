export type IFood = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  price: number;
  foodImage: string;
  menuId: number;
};

export type IGenericResponse = {
  status: string;
  message: string;
};

export type IFoodResponse = {
  status: string;
  food: IFood;
};

export type IFoodsResponse = {
  status: string;
  results: number;
  foods: IFood[];
};
