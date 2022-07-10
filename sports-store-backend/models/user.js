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
        unique: true
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

export default UserObj;