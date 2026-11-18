const jwt= require('jsonwebtoken')

const data={
    _id:"1234@%&"
}
const token=jwt.sign(data,"nhi-btaungi",{expiresIn:"2d"})
console.log("Token:",token);

const decoded = jwt.verify(token,"nhi-btaungi");
console.log("Decoded:",decoded);

