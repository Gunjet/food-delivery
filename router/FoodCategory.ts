import { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/FoodCategory";
import { verifyToken } from "@clerk/backend";
// import { verifyToken } from "@clerk/backend/dist/tokens/verify";

export const foodCategoryRouter = Router ();

foodCategoryRouter.get('/', async (req: Request, res: Response) => {
  const foodCategories = await FoodCategoryModel.find();
  res.json(foodCategories);
});
const auth = async (req: any , res:any , next :any) => {
  const token = req.get('authentication')

  try{
    const verified = await verifyToken( token, {
      secretKey: process.env.CLERK_SECRET_KEY
    })
    console.log({ verified })
  
    const foodCategories = await FoodCategoryModel.find();
    res.json(foodCategories);
    next()
  }
  catch{
    res.json({status: "Forbidden"})
  }
}

// foodCategoryRouter.get('/FoodMenu', auth, async (req: Request, res: Response) => {
//   const token = req.get('authentication')

//   try{
//     const verified = await verifyToken( token, {
//       secretKey: process.env.CLERK_SECRET_KEY
//     })
//     console.log({ verified })
  
//     const foodCategories = await FoodCategoryModel.find();
//     res.json(foodCategories);
//   }
//   catch{
//     res.json({status: "Forbidden"})
//   }
// });

foodCategoryRouter.get('/:id', async (req: Request, res: Response) => {
  const foodCategories = await FoodCategoryModel.find();
  res.json(foodCategories);
});

foodCategoryRouter.post('/', async (req: Request, res: Response) => {
    const updatedItem = await FoodCategoryModel.create({
      categoryName: req.body.categoryName
    });
    res.json(updatedItem)
  });

 foodCategoryRouter.put('/:id', async (req: Request, res: Response) => { 
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

  foodCategoryRouter.delete('/:id', async (req: Request, res: Response) => {
    const deletedItem = await FoodCategoryModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem)
  })