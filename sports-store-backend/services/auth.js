const secret = "sports-store";
import jwt from 'jsonwebtoken';


export const getToken = (data) => {
    return jwt.sign(data, secret);
}

export const decodeToken = (token) => {
    return jwt.decode(token, secret);
}

export default {
    getToken, 
    decodeToken
}