import React from "react";
import "./styles.css"


export default function FeaturedItem({
    item   
}){
    return (
        <section className="featuredItem" style={{
            backgroundSize:'cover',
            backgroundPosition:"center",
            backgroundImage:`url(${require(`../../assets/${item.image}`)})`}}>
            <div className="featuredItem-vertical">
                <div className="featuredItem-horizontal">
                    <div className="featuredItem-name font-extraBold">
                        {item.name.toUpperCase()}
                    </div>
                    <div className="featuredItem-infos">
                        <div className="featuredItem-info-name">{item.name.toUpperCase()}</div>
                        <div className="featuredItem-info-price">R${item.price}</div>
                    </div>
                    <div className="featuredItem-descripton">{item.description}</div>
                </div>
            </div>
        </section>    
    )
}