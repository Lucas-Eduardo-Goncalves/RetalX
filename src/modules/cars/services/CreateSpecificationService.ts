import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationService {
  constructor(private SpecificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationsAlreadyExists =
      this.SpecificationsRepository.findByName(name);

    if (specificationsAlreadyExists) {
      throw new Error("Já existe uma especificação com esse nome.");
    }

    this.SpecificationsRepository.create({ name, description });
  }
}
