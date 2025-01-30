import { model, Schema } from 'mongoose';

export const FOOD_ORDER_STATUS_ENUM_SCHEMA = new Schema(
  {
  type:String,
  enum: ['PENDING', 'CANCELED', 'DELIVERED'],
  default: 'PENDING'
  },{timestamps: true}
);

const FoodOrderStatusEnumModel = model(
  'FoodOrderStatusEnum',
  FOOD_ORDER_STATUS_ENUM_SCHEMA,
);

export { FoodOrderStatusEnumModel };