import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  constructor(private CreateSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.CreateSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
