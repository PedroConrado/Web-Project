import {React, useState, useEffect, useLayoutEffect} from "react";
import './styles.css'

import ItemRow from "../ItemRow";
import FeatureItem from "../FeaturedItem";
import Product from "../../classes/Product";
import User from "../../classes/User";
//import {getList, getFemaleList, getMaleList, getKidsList} from "../../ItemManager";

export default function HomePageMain({

}) { 
    const [itemsList, setItemList] = useState([]);
    const [items, setItems] = useState([]);
    const [maleList, setMaleList] = useState([]);
    const [femaleList, setFemaleList] = useState([]);
    const [kidsList, setKidsList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [section, setSection] = useState("home");
    const [blackHeader, setBlackHeader] = useState(false);
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

    useEffect(() => {
        console.log(marginLeft);
    }, [marginLeft])

    useEffect(() => {
        const loadAll = async () => {
            let items = []
            let list = await Product.getProducts();
            console.log(list);
            setItemList(list);
            let maleList = await Product.getMaleProducts();
            setMaleList(maleList);
            items = items.concat(maleList)
            let femaleList = await Product.getFemaleProducts();
            setFemaleList(femaleList);
            items = items.concat(femaleList)
            let kidsList = await Product.getKidsProducts();
            setKidsList(kidsList);
            items = items.concat(kidsList)
            setItems(items)

            let randomSectionIndex = Math.floor(Math.random() * (Object.keys(list).length));
            let randomSection = list[Object.keys(list)[randomSectionIndex]];
            let featuredIndex = Math.floor(Math.random() * (randomSection.length - 1));
            let featured = randomSection[featuredIndex];
            setFeaturedData(featured);
        }
    
      loadAll();
    }, [])

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            }else{
                setBlackHeader(false);
            }
        }
        window.addEventListener("scroll", scrollListener)
        return () => {
            window.removeEventListener("scroll", scrollListener);
        }
    }, [])


    return (
        <div className="HomePageMain" style={{marginLeft}}>
            
            <header className={`HomePageMain-header ${blackHeader ? "black" : ""}`} style={{marginLeft}}>
                <button onClick={() => setSection("home")} className={`${section == 'home' ? "HomePageMain-header-button" : ""}`}>
                    <p>HOME</p>
                </button >
                <button onClick={() => setSection("man")} className={`${section == 'man' ? "HomePageMain-header-button" : ""}`}>
                    <p>MAN</p>
                </button>
                <button onClick={() => setSection("woman")} className={`${section == 'woman' ? "HomePageMain-header-button" : ""}`}>
                    <p>WOMAN</p>   
                </button>
                <button onClick={() => setSection("kids")} className={`${section == 'kids' ? "HomePageMain-header-button" : ""}`}>
                    <p>KIDS</p>
                </button>
                <form >
                    <input
                        type={"text"}
                        onChange={(event) => {setSection(event.target.value)} } 
                        placeholder="Search..."
                        className= 'HomePageMain-input'
                    />                    
                </form>
            </header>

            {featuredData && section == "home" &&
                <FeatureItem 
                    item = {featuredData}
                />
            }
        
        <section className="HomePageMain-lists">
                {
                    {
                     'home':
                        Object.keys(itemsList).map((item,key)=>(
                            <ItemRow
                                key = {key}
                                section = {section}
                                title = {item}
                                items = {itemsList[item]}
                            />
                        )),
                    'man':
                        <ItemRow 
                            section = {section}
                            title = {"male"}
                            items = {maleList}
                        />,
                    'woman':
                        <ItemRow 
                            section = {section}
                            title = {"female"}
                            items = {femaleList}
                        />,
                    'kids':
                        <ItemRow 
                            section = {section}
                            title = {"kids"}
                            items = {kidsList}
                        />
                    }[section] || 
                    <ItemRow
                        section={section}
                        title = {section}
                        items = {items.filter((i) => i.name.toLowerCase().includes(section.toLowerCase()))}
                    />
                }
            </section>
        </div>
    );
}