import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private static specifications: Specification[] = [];

  constructor() {
    SpecificationsRepository.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      create_at: new Date(),
    });

    SpecificationsRepository.specifications.push(specification);
  }

  list(): Specification[] {
    return SpecificationsRepository.specifications;
  }

  findByName(name: string): Specification {
    const specification = SpecificationsRepository.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}
