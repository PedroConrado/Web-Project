import React, { useLayoutEffect, useState } from "react";

import "./styles.css";

import ClientBar from "../../components/ClientBar";
import ProductViewer from "../../components/ProductViewer";


export default function ProductPage() {
    const [marginLeft, setMarginLeft] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            const clientBar = document.getElementsByClassName("clientBar");
            if(clientBar.length > 0) {
                setMarginLeft(clientBar[0].clientWidth + 10);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
    return(
        <div>
            <ClientBar />
            <div style={{marginLeft}}>
                <ProductViewer />
            </div>
        </div>
    )
}