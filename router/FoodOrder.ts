import { Router } from "express";
import { FoodOrderModel } from "../models/FoodOrder";

export const foodOrderRouter = Router ();

foodOrderRouter.get('/', async (req, res) => {
  const foodOrder = await FoodOrderModel.find({})
  res.json(foodOrder);
});

foodOrderRouter.post('/', async (req, res) => {

  const newOrder = await FoodOrderModel.create({
    food: req.body.food,
    quantity: req.body.quantity,
  })
  res.json(newOrder);
});

foodOrderRouter.put('/:id', async (req, res) => {
    const updatedOrder = await FoodOrderModel.findByIdAndUpdate(
      req.params.id,
      {
        food: req.body.food,
        quantity: req.body.quantity,
      },
      { new: true } 
    );
    res.json(updatedOrder);
});

foodOrderRouter.delete('/:id', async (req, res) => {
  const deletedOrder = await FoodOrderModel.findByIdAndDelete(req.params.id);
  res.json(deletedOrder)
})