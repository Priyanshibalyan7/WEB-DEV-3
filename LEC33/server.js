const bcrypt= require('bcrypt')
const password ="hiii@123"
const pass2 = "priya@123"

const hashpasword= async(password)=>
{
    const salt=await bcrypt.genSalt(10);
    console.log("Salt",salt);
    const hashedpassword=await bcrypt.hash(password,salt);
    console.log("Hashed password",hashedpassword);

    const isMatch= await bcrypt.compare(password,pass2)
    console.log("is Match:",isMatch);
    
}
hashpasword(password)