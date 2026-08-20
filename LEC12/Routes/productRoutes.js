const express=require("express");
const router = express.Router();
const productController=require("../Controller/productController.js")

router.get("/",getProducts)

router.get("/:id",productController.getProductsbyID)

////Create 

router.post("/",productController.addProducts)

//Update

router.put("/:id",productController.updateProducts)

//Delete

router.delete("/:id",productController.deleteProducts)
module.exports=router