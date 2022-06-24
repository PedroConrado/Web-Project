import React, {useState, useEffect} from "react";
import './styles.css'
import Button from "../Button"
import { useParams } from "react-router-dom";
import User from "../../classes/User";

export default function ItemContainer({
    item,

}) {
    const [user, setUser] = useState({})
    const params = useParams();
    useEffect(() => {
        const loadAll = async () => {
            const user = await User.getUserById(params.userID);
            setUser(user);
        }
    
      loadAll();
    }, [])

    return (
        <div>
            <div className="itemContainer">
                <img src={item.image} alt="item"></img>
                <p>{item.name}</p>
                <p>R${item.price}</p>
                <Button orange link to={"/client-shipping/"+user.id}>
                    ADD TO CART
                </Button>
                <Button purple link to={"/client-productPage/"+user.id+"/"+item.id}>
                    <h5>
                        View
                    </h5>
                </Button>
            </div>
        </div>
    );
}