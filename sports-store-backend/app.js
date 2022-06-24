import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routerUser from './router/userRoutes.js';
import routerProduct from './router/productRoutes.js';
import cors from 'cors';

const app=express();
app.use(cors())

mongoose.connect('mongodb+srv://admin:admin@cluster0.mmml2vz.mongodb.net/?retryWrites=true&w=majority');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', routerUser)
app.use('/products', routerProduct)

export default app;