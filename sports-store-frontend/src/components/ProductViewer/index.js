import {React, useState, useEffect} from "react";
import './styles.css'
import Button from "../Button"
import { useParams } from "react-router-dom";
import Product from "../../classes/Product";
import ThreeDPopup from '../3DModelPopup';
import User from "../../classes/User";
import Cart from "../../classes/Cart";
import {useNavigate} from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Cart from "../../classes/Cart";

export default function ProductViewer({

    
}) {
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const [isOpen3dModel, setIsOpen3dModel] = useState(false);
    const navigate = useNavigate();

    const togglePopup3d = () => {
        setIsOpen3dModel(!isOpen3dModel);
    }

    const params = useParams();
    useEffect(() => {
        const loadAll = async () => {
            console.log(params.productID)
            const product = await Product.getproductById(parseInt(params.productID));
            setProduct(product);
            console.log(product)

        }
    
      loadAll();
    }, []);

    const addItemCart = () => {
        Cart.insertItem(product.id);
        navigate(`/client-shipping/${parseInt(params.userID)}`);
    }

    const addItemCart = () => {
        Cart.insertItem(product.id);
        navigate(`/client-shipping`);
    }

    return (
        <>
            <div className="client-productViewer">
                <div className="client-productViewer-background">
                    <div className="client-productViewer-nameDescription">
                        <h3>{product.name}</h3>
                    </div>
                    <div className="client-productViewer-imageContainer">
                        <div className="client-productViewer-imageContainer-wrapper">
                            <img src = {product.image}></img>
                        </div>
                    </div>
                    <p className='font-extraBold color-orange'>Preço: R$ {product.price}</p>
                    <div className="client-productViewer-data">
                        <p>Description: {product.description}</p>
                        <p>Brand: {product.marca}</p>
                        <p>Size: {product.tamanho}</p>
                        <p>In Stock: {product.quantityStock}</p>
                    </div>
                    <Button gray onClick={setIsOpen3dModel}>
                        <p className="font-bolder">View 3D Model</p>
                    </Button>
                    <div className="client-productViewer-buttons">
                        <Button purple link to={"/client-homePage"}>
                            <p>Back</p>
                        </Button>
                        <Button orange onClick={addItemCart}>
                            <p>Add To Cart</p>
                        </Button>
                    </div>
                </div>
            </div>
            {isOpen3dModel && <ThreeDPopup handleClose={togglePopup3d} productData={product}/>}
        </>
        
    );
}