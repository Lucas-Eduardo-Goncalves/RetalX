import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private SpecificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.SpecificationRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Já existe uma categoria com esse nome.");
    }

    this.SpecificationRepository.create({ name, description });
  }
}
