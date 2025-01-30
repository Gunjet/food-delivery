import { Router } from "express";
import { UserModel } from "../models/User";

export const userRouter = Router ();

userRouter.get('/', async (req, res) => {
  const user = await UserModel.find({})
  res.json(status);
});

userRouter.post('/', async (req, res) => {

  const newUser = await UserModel.create({
    enum: req.body.enum,
  })
  res.json(newUser);
});
userRouter.put('/:id', async (req, res) => {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        enum: req.body.enum,
      },
      { new: true } 
    );
    res.json(updatedUser);
});

userRouter.delete('/:id', async (req, res) => {
  const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
  res.json(deletedUser)
})