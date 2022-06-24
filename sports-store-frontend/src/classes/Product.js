const male = "male";
const female = "female";
const kids = "kids";

export default class Product {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
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


    async create() {
        //faz criação do objeto no database caso não exista
        return this;
    }


    async update() {
        //faz update no database aqui
        //retorna objeto atualizado
        return this;
    }

    async delete() {
        //faz deleção do objeto no database
    }

    static async getProducts() {
        let products = {}
        products[male] = await Product.getMaleProducts();
        products[female] = await Product.getFemaleProducts();
        products[kids] = await Product.getKidsProducts();
        return products;
    }

    static async getMaleProducts() {
        let resp = await fetch("http://localhost:3001/products/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = await resp.json();
        let products = []
        for (const product of resp.filter(obj => obj.category === male)) {
            const productObj = new Product(product);
            products.push(productObj);
        }
        return products;
    }
    static async getFemaleProducts() {
        let resp = await fetch("http://localhost:3001/products/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = await resp.json();
        let products = []
        for (const product of resp.filter(obj => obj.category === female)) {
            const productObj = new Product(product);
            products.push(productObj);
        }
        return products;
    }

    static async getKidsProducts() {
        let resp = await fetch("http://localhost:3001/products/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = await resp.json();
        let products = []
        for (const product of resp.filter(obj => obj.category === kids)) {
            const productObj = new Product(product);
            products.push(productObj);
        }
        return products;
    }



    static async getproductById(id) {
        let resp = await fetch("http://localhost:3001/products/"+id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = await resp.json();
        const products = resp[0];
        return new Product(products[0]);
    }

    static async updateProduct(updatedProduct) {
        let updatedProductData={
            id: updatedProduct.id,
            name: updatedProduct.name,
            description: updatedProduct.description,
            price: updatedProduct.price,
            quantityStock: updatedProduct.quantityStock,
            quantitySold: updatedProduct.quantitySold,
            image: updatedProduct.image,
            image3d: updatedProduct.image3d,
            category: updatedProduct.category
        }
        await fetch("http://localhost:3001/products/", {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProductData),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
    }

    static async addProduct(newProduct) {
        let resp = await fetch("http://localhost:3001/products/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = await resp.json();
        let newId=0;
        let i={}
        for(i in resp){
            if(i.id>newId) newId=i.newId;
        }
        newId+=1;
        console.log(newId);
        let newProductData={
            id: newId, 
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price,
            quantityStock: newProduct.quantityStock,
            quantitySold: newProduct.quantitySold,
            image: newProduct.image,
            image3d: newProduct.image3d,
            category: newProduct.category,
        }
        await fetch("http://localhost:3001/products/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newProductData),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
    }

    static async removeProduct(id) {
        await fetch("http://localhost:3001/products/"+id, {
            method: "delete",
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


let productsList = [
    {
        id: 1,
        name: "Nike Air Shoe",
        description: "Nice shoe :)",
        price: 100.00,
        quantityStock: 50,
        quantitySold: 10,
        image: "/assets/NikeShoe.png",
        image3d: "/assets/NikeShoe.stl",
        category: male,
    },
    {
        id: 2,
        name: "Puma Ball",
        description: "Nice ball :)",
        price: 30.00,
        quantityStock: 100,
        quantitySold: 20,
        image: "/assets/PumaBall.png",
        image3d: "/assets/Shoe3.stl",
        category: kids
    },
    {
        id: 3,
        name: "Asics Shoes",
        price: 500,
        description: "O tênis de tênis GEL-RESOLUTION ™ 8 promove um passo ágil com uma sensação de proximidade ao solo da quadra. A parte superior do FLEXION FIT ™ fornece suporte de ajuste de forma com a integração da tecnologia DYNAWALL ™, que oferece maior estabilidade no mediopé durante movimentos laterais e cobertura costa a costa.",
        image: "AsicsShoes.png",
        quantityStock: 500,
        quantitySold: 100,
        image: "/assets/AsicsShoes.png",
        image3d: "/assets/Shoe2.stl",
        category: female,
    }

]