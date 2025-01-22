import { Router } from "express";
import { FoodModel } from "../models/food";

export const foodRouter = Router ();

foodRouter.get('/', async (req, res) => {

  const allFoods = await FoodModel.find({})
  res.json(allFoods);
});

foodRouter.post('/', async (req, res) => {

  const newFood = await FoodModel.create({
    foodName:req.body.foodName,
    category:'678b772248b800d5710a804c',
    image:'https://desibaniye.com/wp-content/uploads/2022/02/double-cheese-pizza.jpg',
    ingredients:'dough, double cheese',
    price: 12.99
  })
  res.json(newFood);
});