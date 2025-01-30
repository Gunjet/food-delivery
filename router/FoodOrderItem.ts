import { Router } from "express";
import { FoodOrderItemModel } from "../models/FoodOrderItem";

export const foodOrderItemRouter = Router ();

foodOrderItemRouter.get('/', async (req, res) => {
  const orderItems = await FoodOrderItemModel.find({})
  res.json(orderItems);
});

foodOrderItemRouter.post('/', async (req, res) => {

  const newItems = await FoodOrderItemModel.create({
    food: req.body.food,
    quantity: req.body.quantity,
  })
  res.json(newItems);
});

foodOrderItemRouter.put('/:id', async (req, res) => {
    const updatedItem = await FoodOrderItemModel.findByIdAndUpdate(
      req.params.id,
      {
        food: req.body.food,
        quantity: req.body.quantity,
      },
      { new: true } 
    );
    res.json(updatedItem);
});

foodOrderItemRouter.delete('/:id', async (req, res) => {
  const deletedItem = await FoodOrderItemModel.findByIdAndDelete(req.params.id);
  res.json(deletedItem)
})