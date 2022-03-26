import { Category } from "../model/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  list: () => Category[];
  findByName: (name: string) => Category;
  create: (category: ICreateCategoryDTO) => void;
}
