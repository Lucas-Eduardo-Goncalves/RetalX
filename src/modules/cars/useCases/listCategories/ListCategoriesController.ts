import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private ListCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    return response.json(this.ListCategoriesUseCase.execute());
  }
}
