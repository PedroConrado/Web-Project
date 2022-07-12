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

export default ProductObj;