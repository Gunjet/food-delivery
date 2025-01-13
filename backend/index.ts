import { configDotenv  } from "dotenv";
import express, { Request, Response } from 'express'
const mongoose = require('mongoose');

const PORT = 8000;
const app = express();
app.use(express.json());

configDotenv();

const connectMongoDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  await mongoose.connect(MONGODB_URI);
};

connectMongoDB();

const FOOD_CATEGORY_SCHEMA = new mongoose.Schema(
  {
  categoryName: String,
  },
  { timestamps: true }
);

const FoodCategoryModel = mongoose.model(
  'FoodCategory',
  FOOD_CATEGORY_SCHEMA,
  'food-category'
);
 
app.get('/', async (req: Request, res: Response) => {
  const foodCategories = await FoodCategoryModel.find();
  res.json(foodCategories);
});

app.get('/create', async (req: Request, res: Response) => {
  const newItem = await FoodCategoryModel.create({
    categoryName: 'New Food Category created successfully.'
  });

  res.send({
    message: 'New Food Category created successfully.',
    newItem,
  });
});
