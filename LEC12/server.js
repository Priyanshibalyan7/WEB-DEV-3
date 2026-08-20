const express= require("express")
const products = require("./Database/data.js");
const router = express.Router();

const app=express();
const PORT=3000
app.use(express.json());  //json data parse

app.use("/api/products",products)

app.listen(PORT,()=>console.log("server is running"));