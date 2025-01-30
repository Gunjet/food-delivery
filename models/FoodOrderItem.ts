import { model, Schema } from 'mongoose';

export const FOOD_ORDER_ITEM_SCHEMA = new Schema(
  {
  food: String,
  quantity: Number,
  },{timestamps: true}
);

const FoodOrderItemModel = model(
  'FoodOrderItem',
  FOOD_ORDER_ITEM_SCHEMA,
);

export { FoodOrderItemModel };