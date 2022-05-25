import {React, useState, useEffect} from "react";
import './styles.css'

import ItemRow from "../ItemRow";
import FeatureItem from "../FeaturedItem";
import {getList, getFemaleList, getMaleList, getKidsList} from "../../ItemManager";

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

    useEffect(() => {
        const loadAll = async () => {
            let items = []
            let list = await getList();
            setItemList(list);
            let maleList = await getMaleList();
            setMaleList(maleList[0]);
            items = items.concat(maleList[0].items)
            let femaleList = await getFemaleList();
            setFemaleList(femaleList[0]);
            items = items.concat(femaleList[0].items)
            let kidsList = await getKidsList();
            setKidsList(kidsList[0]);
            items = items.concat(kidsList[0].items)
            setItems(items)

            let randomSectionIndex = Math.floor(Math.random() * (list.length));
            let randomSection = list.filter(i=>i.slug === list[randomSectionIndex].slug);
            let featuredIndex = Math.floor(Math.random() * (randomSection[0].items.length - 1));
            let featured = randomSection[0].items[featuredIndex];
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
        <div className="HomePageMain">
            
            <header className={`HomePageMain-header ${blackHeader ? "black" : ""}`}>
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
                        itemsList.map((item,key)=>(
                            <ItemRow
                                key = {key}
                                section = {section}
                                title = {item.slug}
                                items = {item.items}
                            />
                        )),
                    'man':
                        <ItemRow 
                            section = {section}
                            title = {maleList.slug}
                            items = {maleList.items}
                        />,
                    'woman':
                        <ItemRow 
                            section = {section}
                            title = {femaleList.slug}
                            items = {femaleList.items}
                        />,
                    'kids':
                        <ItemRow 
                            section = {section}
                            title = {kidsList.slug}
                            items = {kidsList.items}
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