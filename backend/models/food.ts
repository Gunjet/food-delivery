import { model, Schema } from 'mongoose';

const FOOD_SCHEMA = new Schema(
  {
  foodName: String,
  image: String,
  price: Number,
  ingredients:String,
  category:{
    type: Schema.Types.ObjectId,
    ref:'FoodCategory'
  },

  },{timestamps: true}
);

const FoodModel = model(
  'Food',
  FOOD_SCHEMA,
);

export { FoodModel };