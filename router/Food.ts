import { Router } from "express";
import { FoodModel } from "../models/Food";

export const foodRouter = Router ();

foodRouter.get('/', async (req, res) => {
  const allFoods = await FoodModel.find({})
  res.json(allFoods);
});

foodRouter.post('/', async (req, res) => {

  const newFood = await FoodModel.create({
    foodName: req.body.foodName,
    category: req.body.category,
    image: req.body.image,
    ingredients: req.body.ingredients,
    price: req.body.price
  })
  res.json(newFood);
});

foodRouter.put('/:id', async (req, res) => {
    const updatedItem = await FoodModel.findByIdAndUpdate(
      req.params.id,
      {
        foodName: req.body.foodName,
        category: req.body.category,
        image: req.body.image,
        ingredients: req.body.ingredients,
        price: req.body.price
      },
      { new: true } 
    );
    res.json(updatedItem);
});

foodRouter.delete('/:id', async (req, res) => {
  const deletedItem = await FoodModel.findByIdAndDelete(req.params.id);
  res.json(deletedItem)
})