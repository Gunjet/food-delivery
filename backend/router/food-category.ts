import { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/food-category";

export const foodCategoryRouter = Router ();

foodCategoryRouter.get('/', async (req: Request, res: Response) => {
  const foodCategories = await FoodCategoryModel.find();
  res.json(foodCategories);
});

foodCategoryRouter.get('/:id', async (req: Request, res: Response) => {
  const foodCategories = await FoodCategoryModel.find();
  res.json(foodCategories);
});

foodCategoryRouter.post('/', async (req: Request, res: Response) => {
    const updatedItem = await FoodCategoryModel.create({
      categoryName: req.body.categoryName
    });
    res.json(updatedItem)
  });

 foodCategoryRouter.put('/:id', async (req: Request, res: Response) => { 
    const updatedItem = await FoodCategoryModel.findByIdAndUpdate(
      req.params.id,
      {
        categoryName: String(req.body.categoryName)
      },
      { new: true }
    )
    const foodCategories = await FoodCategoryModel.find();
    res.json(foodCategories);
  })

  foodCategoryRouter.delete('/:id', async (req: Request, res: Response) => {
    const deletedItem = await FoodCategoryModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem)
  })