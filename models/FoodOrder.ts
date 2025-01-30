import { model, Schema } from 'mongoose';
import { FOOD_ORDER_ITEM_SCHEMA } from './FoodOrderItem';
import { FOOD_ORDER_STATUS_ENUM_SCHEMA } from './FoodOrderStatusEnum';

const FOOD_ORDER_SCHEMA = new Schema(
  {
  user:{
    type: Schema.Types.ObjectId,
  },
  totalPrice: Number,
  foodOrderItems: [FOOD_ORDER_ITEM_SCHEMA],
  status: FOOD_ORDER_STATUS_ENUM_SCHEMA,
  address:String,

  },{timestamps: true}
);

const FoodOrderModel = model(
  'FoodOrder',
  FOOD_ORDER_SCHEMA,
);

export { FoodOrderModel };