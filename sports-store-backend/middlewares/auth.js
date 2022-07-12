import UserObj from '../models/user.js';
import { decodeToken } from '../services/auth.js';


const isAdmin = async (req, res, next) => {
    let token = req.headers.authorization;
    if(!token)
        return res.status(401).send({error: "You must send a authorization token to access this resource"});
    token = token.split(" ")[1]
    try{
        const data = decodeToken(token)
        const user = await UserObj.findOne(data);
        if(!user.isAdmin)
            return res.status(403).send({error: "Only admins can access this resource"});
        req.user = user;
        return next();
    } catch(err){
        return res.status(400).send(err);
    }
}

const isUser = async (req, res, next) => {
    let token = req.headers.authorization;
    
    if(!token)
        return res.status(401).send({error: "You must send a authorization token to access this resource"});
    
    token = token.split(" ")[1]
    try{
        const data = decodeToken(token)
        const user = await UserObj.findOne(data)
        console.log(user)
        req.user = user;
        if(user.isAdmin)
            return next();
        console.log(req.params);
        console.log(data.id)
        if(data.id !== parseInt(req.params.user))
            return res.status(403).send({error: "You cannot access this resource"});
        return next();
    } catch(err){
        return res.status(400).send(err);
    }
}

const isLogged = async (req, res, next) => {
    let token = req.headers.authorization;
    
    if(!token)
        return res.status(401).send({error: "You must send a authorization token to access this resource"});
    
    token = token.split(" ")[1]
    try{
        const data = decodeToken(token)
        const user = await UserObj.findOne(data);
        if(!user)
            return res.status(403).send({error: "You must be a valid user to access this resource"});
        req.user = user;
        return next();
    } catch(err){
        return res.status(400).send(err);
    }
}

export default {
    isUser,
    isAdmin,
    isLogged
}