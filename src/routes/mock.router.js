import { Router } from "express"
import { generateProduct } from "../mocks/products.mock.js";

const router = Router();

router.get('/', async (req,res)=>{
    try{
        const products = [];

        for(let i=0;i<100;i++){
            products.push(generateProduct())
        }

        res.send({status:"success",payload:products})
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}
);

export default router;