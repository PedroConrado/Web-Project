import {React, useState, useEffect} from "react";
import './styles.css'
import Button from "../Button"
import { useParams } from "react-router-dom";
import Product from "../../classes/Product";

export default function ProductViewer({

    
}) {
    const [product, setProduct] = useState({})
    const params = useParams();
    useEffect(() => {
        const loadAll = async () => {
            const product = await Product.getproductById(parseInt(params.productID));
            setProduct(product);
        }
    
      loadAll();
    }, [])

    return (
        <div className="client-productViewer">
            <div className="client-productViewer-background">
                <div className="client-productViewer-nameDescription">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </div>
                <div className="client-productViewer-imageContainer">
                    <div className="client-productViewer-imageContainer-wrapper">
                        <img src = {product.image}></img>
                    </div>
                    <p>R$ {product.price}</p>
                    <Button orange>
                        <p>ADD TO CART</p>
                    </Button>
                </div>
            </div>
        </div>
        
    );
}