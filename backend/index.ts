import { configDotenv  } from "dotenv";
import express from 'express'
import mongoose from "mongoose";
const cors = require('cors');
import { foodCategoryRouter } from "./router/food-category";
import { foodRouter } from "./router/food";

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

app.use('/food-category/', foodCategoryRouter);
app.use('/food/', foodRouter);

app.listen(PORT, ()=> console.log("aslaa"))
