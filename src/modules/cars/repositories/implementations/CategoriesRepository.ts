import { Category } from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private static categories: Category[] = [];

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      create_at: new Date(),
    });

    CategoriesRepository.categories.push(category);
  }

  list(): Category[] {
    return CategoriesRepository.categories;
  }

  findByName(name: string): Category {
    const category = CategoriesRepository.categories.find(
      (category) => category.name === name
    );
    return category;
  }
}
