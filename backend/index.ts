import { configDotenv  } from "dotenv";
import express, { Request, Response } from 'express'
import mongoose from "mongoose";
const cors = require('cors');

const PORT = 4000;
const app = express();
app.use(express.json());
app.use(cors())

configDotenv();

const connectMongoDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  await mongoose.connect(MONGODB_URI!);
  console.log('db-tai holbogdloo')
};

connectMongoDB();

const FOOD_CATEGORY_SCHEMA = new mongoose.Schema(
  {
  categoryName: String,
  },{timestamps: true}
);

const FoodCategoryModel = mongoose.model(
  'FoodCategory',
  FOOD_CATEGORY_SCHEMA,
  'food-category'
);

app.get('/food-category/', async (req: Request, res: Response) => {
  const foodCategories = await FoodCategoryModel.find();
  res.json(foodCategories);
});

app.get('/food-category/:id', async (req: Request, res: Response) => {
  res.json({
    message: "One food category"
  })
})

app.post('/food-category/', async (req: Request, res: Response) => {
  const updatedItem = await FoodCategoryModel.create({
    categoryName: req.body.categoryName
  });
  res.json(updatedItem)
});

app.put('/food-category/:id', async (req: Request, res: Response) => { 
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

app.delete('/food-category/:id', async (req: Request, res: Response) => {
  const deletedItem = await FoodCategoryModel.findByIdAndDelete(req.params.id);
  res.json(deletedItem)
})

app.listen(PORT, ()=> console.log("aslaa"))
