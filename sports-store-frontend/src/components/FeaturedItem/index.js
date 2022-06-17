import React from "react";
import "./styles.css"


export default function FeaturedItem({
    item   
}){
    return (
        <section className="featuredItem" style={{
            backgroundSize:'cover',
            backgroundPosition:"center",
            backgroundImage:`url(${item.image})`}}>
            <div className="featuredItem-vertical">
                <div className="featuredItem-horizontal">
                    <h1 className="font-extraBold">
                        {item.name.toUpperCase()}
                    </h1>
                    <div className="featuredItem-infos">
                        <h5 className="featuredItem-info-name">{item.name.toUpperCase()}</h5>
                        <h5 className="featuredItem-info-price">R${item.price}</h5>
                    </div>
                    <p className="featuredItem-descripton">{item.description}</p>
                </div>
            </div>
        </section>    
    )
}