import { Category } from "../model/Category";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  list: () => Category[];
  findByName: (name: string) => Category;
  create: (category: ICreateSpecificationDTO) => void;
}
