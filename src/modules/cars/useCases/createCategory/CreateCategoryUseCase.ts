import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private CategoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.CategoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Já existe uma categoria com esse nome.");
    }

    this.CategoriesRepository.create({ name, description });
  }
}
