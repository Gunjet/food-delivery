import { model, Schema } from 'mongoose';

export const USER_SCHEMA = new Schema(
  {
    email:String,
    password:String,
    phoneNumber:Number,
    address:String,
    role:String,
    orderedFoods:{
      type: Schema.Types.ObjectId,
    },
    ttl:Date,
    isVerified:Boolean,
  },{timestamps: true}
);

const UserModel = model(
  'User',
  USER_SCHEMA,
);

export { UserModel };