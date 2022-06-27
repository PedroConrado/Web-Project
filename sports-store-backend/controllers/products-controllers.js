import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    quantityStock:{
        type: Number,
        required: true,
    },
    quantitySold:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    image3d:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    }
});

mongoose.model('Product', productSchema);

const ProductObj=mongoose.model('Product');

const controller={};

controller.getProducts=async(req, res) => {
    try{
        console.log("getting");
        const data=await ProductObj.find();
        res.status(200).send(data);
        console.log(data);
        return data;
    }
    catch(e){
        res.status(400).send(e);
    }
};

controller.getById=async(req, res) => {
    try{
        console.log("getting");
        const data=await ProductObj.find({id: req.params.prod});
        res.status(200).send(data);
        console.log(data);
        return data;
    }
    catch(e){
        res.status(400).send(e);
    }
};

controller.post=async (req, res) => {
    console.log(req.body)
    console.log("recieved post request")
    newId=ProductObj.find().sort({id:-1}).limit(1).id+1;
    newId+=1;
    const product=new ProductObj(req.body);
    product.id=newId
    console.log("creating")
    try{;
        await product.save();
        res.status(201).send({message: "Produto cadastrado."});
    }
    catch(e){
        console.log(e)
        res.status(400).send({
            message: "Falha no cadastro.",
            data: e
        })
    }
};

controller.update=async (req, res) => {
    console.log(req.body)
    const product=new ProductObj(req.body);
    try{
        console.log("update");
        await ProductObj.findOneAndUpdate({id: product.id}, {$set: {
            name: product.name,
            description: product.description, 
            category: product.category,
            price: product.price, 
            quantityStock: product.quantityStock, 
            quantitySold: product.quantitySold,
            image: product.image, 
            image3d: product.image3d
        }});
        res.status(201).send({message: "Produto cadastrado."});
    }
    catch(e){
        console.log(e)
        res.status(400).send({
            message: "Falha no cadastro.",
            data: e
        })
    }
};

controller.delete=async (req, res) => {
    try{
        console.log("deleting");
        await ProductObj.findOneAndRemove({id:req.params.prod});
        res.status(201).send({message: "Produto apagado."});
    }
    catch(e){
        res.status(400).send({
            message: "Falha no delete.",
            data: e
        })
    }
};

export default controller;