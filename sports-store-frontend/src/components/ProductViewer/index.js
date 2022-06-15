import {React, useState, useEffect} from "react";
import './styles.css'
import Button from "../Button"
import { useParams } from "react-router-dom";
import Product from "../../classes/Product";
import ThreeDPopup from '../3DModelPopup';
import User from "../../classes/User";
import Cart from "../../classes/Cart";
import {useNavigate} from "react-router-dom";


export default function ProductViewer({

    
}) {
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
    }, [])

    const [user, setUser] = useState({})
    useEffect(() => {
        const loadAll = async () => {
            const user = await User.getUserById(parseInt(params.userID));
            setUser(user);
        }
    
      loadAll();
    }, []);

    const addItemCart = () => {
        Cart.insertItem(product.id);
        navigate(`/client-shipping/${parseInt(params.userID)}`);
    }

    return (
        <>
            <div className="client-productViewer">
                <div className="client-productViewer-background">
                    <div className="client-productViewer-nameDescription">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>In Stock: {product.quantityStock}</p>
                    </div>
                    <div className="client-productViewer-imageContainer">
                        <div className="client-productViewer-imageContainer-wrapper">
                            <img src = {product.image}></img>
                        </div>
                        <p>R$ {product.price}</p>
                        
                    </div>
                    <Button gray onClick={setIsOpen3dModel}>
                        <p className="font-bolder">View 3D Model</p>
                    </Button>
                    <div className="client-productViewer-buttons">
                        <Button purple link to={"/client-homePage/"+user.id}>
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