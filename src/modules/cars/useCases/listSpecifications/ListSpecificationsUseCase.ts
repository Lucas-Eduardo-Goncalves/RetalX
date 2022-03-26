import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

export class ListSpecificationsUseCase {
  constructor(private SpecificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.SpecificationsRepository.list();
  }
}
