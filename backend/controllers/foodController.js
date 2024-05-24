import foodModel from "../models/foodModel.js";
import fs from 'fs'


 const addFood = async(req,res)=>{

    let image_filename = `${req.file.filename}`

    const food = new foodModel({
        name: req.body.name,  // Ensure you have name in the request body
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename 
      });
    
      try {
        await food.save();
        res.json({ success: true, message: "Food added successfully" });
      } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error adding food" });
      }

 }

 const listFood = async(req,res)=>{
    
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
      } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error" });
      }
      
 }

 const removeFood= async(req,res)=>{

    try {
        const food = await foodModel.findById(req.body.id);
       
    
        // Delete the associated image file
         fs.unlink(`uploads/${food.image}`,()=>{});
    
        // Remove the food item from the database
        await foodModel.findByIdAndDelete(req.body.id);
    
        res.json({ success: true, message: "Food removed successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
 }

 export {addFood,listFood,removeFood}