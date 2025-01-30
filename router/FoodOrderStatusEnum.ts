import { Router } from "express";
import { FoodOrderStatusEnumModel } from "../models/FoodOrderStatusEnum";

export const foodOrderStatusEnumRouter = Router ();

foodOrderStatusEnumRouter.get('/', async (req, res) => {
  const status = await FoodOrderStatusEnumModel.find({})
  res.json(status);
});

foodOrderStatusEnumRouter.post('/', async (req, res) => {

  const newStatus = await FoodOrderStatusEnumModel.create({
    enum: req.body.enum,
  })
  res.json(newStatus);
});

foodOrderStatusEnumRouter.put('/:id', async (req, res) => {
    const updatedStatus = await FoodOrderStatusEnumModel.findByIdAndUpdate(
      req.params.id,
      {
        enum: req.body.enum,
      },
      { new: true } 
    );
    res.json(updatedStatus);
});

foodOrderStatusEnumRouter.delete('/:id', async (req, res) => {
  const deletedStatus = await FoodOrderStatusEnumModel.findByIdAndDelete(req.params.id);
  res.json(deletedStatus)
})