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
        unique: true
    },
    description:{
        type: String,
        required: true,
    },
    tamanho:{
        type: String,
        required: true,
    },
    marca:{
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
    let newId=await ProductObj.find().sort({id:-1}).limit(1);
    let product=new ProductObj();
    if(newId[0]===undefined)
        product.id=1;
    else
        product.id=newId[0].id+1;
    product.name= req.body.name;
    product.description=req.body.description;
    product.tamanho= req.body.tamanho;
    product.marca= req.body.marca;
    product.price= req.body.price;
    product.quantitySold= req.body.quantitySold;
    product.quantityStock= req.body.quantityStock;
    product.image= req.body.image;
    product.image3d= req.body.image3d;
    product.category= req.body.category;
    console.log(product)
    try{
        console.log("creating");
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
    let product=new ProductObj(req.body);
    try{
        console.log("update");
        await ProductObj.findOneAndUpdate({id: req.params.prod}, {$set: {
            name: product.name,
            description: product.description, 
            tamanho: product.tamanho,
            marca: product.marca,
            price: product.price, 
            quantityStock: product.quantityStock, 
            quantitySold: product.quantitySold,
            image: product.image, 
            image3d: product.image3d,
            category: product.category
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