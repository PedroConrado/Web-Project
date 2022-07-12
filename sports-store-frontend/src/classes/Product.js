import axios from 'axios';
const male = "male";
const female = "female";
const kids = "kids";

export default class Product {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.tamanho = data.tamanho;
        this.marca = data.marca;
        this.price = data.price;
        this.quantityStock = data.quantityStock;
        this.quantitySold = data.quantitySold;
        this.image = data.image;
        this.image3d = data.image3d;
        this.category = data.category;
    }
    setName(value) {
        this.name = value;
    }
    setDescription(value) {
        this.description = value;
    }
    setPrice(value) {
        this.price = value;
    }
    setQuantityStock(value) {
        this.quantityStock = value;
    }
    setQuantitySold(value) {
        this.quantitySold = value;
    }
    setImage(value){
        this.image = value;
    }
    setImage3d(value){
        this.image3d = value;
    }
    setCategory(value){
        this.category = value;
    }

    static async getProducts() {
        let products = {}
        products[male] = await Product.getMaleProducts()
        products[female] = await Product.getFemaleProducts()
        products[kids] = await Product.getKidsProducts()
        return products;
    }

    static async getMaleProducts() {
        let resp = await axios.get("http://localhost:3001/products/", {
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = resp.data;
        let products = []
        for (const product of resp.filter(obj => obj.category === male)) {
            const productObj = new Product(product);
            products.push(productObj);
        }
        return products;
    }
    static async getFemaleProducts() {
        let resp = await axios.get("http://localhost:3001/products/", {
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = resp.data;
        let products = []
        for (const product of resp.filter(obj => obj.category === female)) {
            const productObj = new Product(product);
            products.push(productObj);
        }
        return products;
    }

    static async getKidsProducts() {
        let resp = await axios.get("http://localhost:3001/products/", {
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = resp.data;
        let products = []
        for (const product of resp.filter(obj => obj.category === kids)) {
            const productObj = new Product(product);
            products.push(productObj);
        }
        return products;
    }



    static async getproductById(id) {
        let resp = await axios.get("http://localhost:3001/products/"+id, {
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = resp.data;
        const products = resp[0];
        return new Product(products);
    }

    static async updateProduct(updatedProduct) {
        let imageLink=updatedProduct.image;
        if(imageLink.indexOf("/assests/")===-1 && imageLink.indexOf("http")===-1) imageLink="/assets/"+imageLink;
        let imageLink3d=updatedProduct.image3d;
        if(imageLink3d.indexOf("/assests/")===-1 && imageLink3d.indexOf("http")===-1) imageLink3d="/assets/"+imageLink3d;
        let updatedProductData={
            id: updatedProduct.id,
            name: updatedProduct.name,
            description: updatedProduct.description,
            tamanho: updatedProduct.tamanho,
            marca: updatedProduct.marca,
            price: updatedProduct.price,
            quantityStock: updatedProduct.quantityStock,
            quantitySold: updatedProduct.quantitySold,
            image: imageLink,
            image3d: imageLink3d,
            category: updatedProduct.category
        }
        try{
            await axios.put("http://localhost:3001/products/"+updatedProductData.id,
            updatedProductData,
            {
                headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
                }
            })
        }
        catch(e) {
            window.alert(e);
            return;
        }
    }

    static async addProduct(newProduct) {
        let imageLink=newProduct.image;
        if(imageLink.indexOf("/assests/")===-1 && imageLink.indexOf("http")===-1) imageLink="/assets/"+imageLink;
        let imageLink3d=newProduct.image3d;
        if(imageLink3d.indexOf("/assests/")===-1 && imageLink3d.indexOf("http")===-1) imageLink3d="/assets/"+imageLink3d;
        let newProductData={
            name: newProduct.name,
            description: newProduct.description,
            tamanho: newProduct.tamanho,
            marca: newProduct.marca,
            price: newProduct.price,
            quantityStock: newProduct.quantityStock,
            quantitySold: newProduct.quantitySold,
            image: imageLink,
            image3d: imageLink3d,
            category: newProduct.category,
        }
        await axios.post("http://localhost:3001/products/",
        newProductData,
        {
            headers: {
            "Content-Type": "application/json",
            }
        })
        .catch(error => {
            window.alert(error);
            return;
        });
    }

    static async removeProduct(id) {
        await axios.delete("http://localhost:3001/products/"+id, {
            headers: {
            "Content-Type": "application/json",
            }
        })
        .catch(error => {
            window.alert(error);
            return;
        });
    }
}