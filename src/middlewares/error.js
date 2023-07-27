import EErrors from "../constants/EErrors.js";

export default (error,req,res,next)=>{
    console.log(error);
    res.send("prueba");
}