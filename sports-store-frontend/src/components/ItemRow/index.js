import React, {useState} from "react";
import './styles.css'

import ItemContainer from "../ItemContainer";
import LeftArrow from "../../assets/arrow-left.png"
import RightArrow from "../../assets/arrow-right.png"


export default function ItemRow({
    title = "Default Title",
    section,
    items,
}) {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x>0){
            x=0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = items.length * 200;
        if(window.innerWidth - listW > x){
            x=(window.innerWidth - listW) - 160;
        }
        setScrollX(x);
    }

    const [hovered, setHovered] = useState(false)

    const onMouseEnter = () =>{
        setHovered(true);
    }

    const onMouseLeave = () =>{
        setHovered(false);
    }

    const hoverStyle = hovered ? { opacity:0.3 } : { opacity:0 };

    return (

        <div>
            {
                {
                'home':
                    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <h2 className="itemRow-title">{title.toUpperCase()}</h2>
                        <div className="itemRow-left" onClick={handleLeftArrow} style={hoverStyle}>
                            <img className="itemRow-arrow" src={LeftArrow}></img>
                        </div>
                        <div className="itemRow-right" onClick={handleRightArrow} style={hoverStyle}>
                            <img className="itemRow-arrow" src={RightArrow}></img>
                        </div>
                        <div className="itemRow-listarea">
                            <div className="itemRow-list" style={{
                                marginLeft: scrollX,
                                width: items.length * 250
                            }}>
                                {items.length > 0 && items.map((item,key)=>(
                                    <div key={key} className="itemRow-item">
                                        <ItemContainer
                                            item={item}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>,
                }[section] ||
                <div className="itemRow-listarea itemRow-listarea-central">
                    <h2 className="itemRow-title">{title}</h2>
                    {items.length > 0 && items.map((item,key)=>(
                        <div key={key} className="itemRow-item">
                            <ItemContainer
                                item={item}
                            />
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}