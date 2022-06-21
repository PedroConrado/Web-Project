import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        index: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        required: true,
    }
});

mongoose.model('User', userSchema);

const UserObj=mongoose.model('User');

const controller={};

controller.getUsers=async(req, res) => {
    try{
        console.log("getting all users");
        const data=await UserObj.find();
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
        const data=await UserObj.find({id: req.params.user});
        res.status(200).send(data);
        console.log(data);
        return data;
    }
    catch(e){
        res.status(400).send(e);
    }
};

controller.update=async (req, res) => {
    console.log(req.body)
    const user=new UserObj(req.body);
    try{
        console.log("update");
        await UserObj.findOneAndUpdate({id: user.id}, {$set: {name: user.name, profilePicture: user.profilePicture, phone: user.phone, address: user.address}});
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

controller.post=async (req, res) => {
    console.log("creating a new product")
    console.log(req.body)
    
    const user=new UserObj();
    user.id=req.body.id;
    user.name=req.body.name;
    user.phone=req.body.phone;
    user.address=req.body.address;
    user.profilePicture=req.body.profilePicture;
    user.email=req.body.email;
    user.password=req.body.password;
    user.isAdmin=req.body.isAdmin;
    try{
        console.log("creating");
        await user.save();
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
        await UserObj.findOneAndRemove({id: req.params.user});
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