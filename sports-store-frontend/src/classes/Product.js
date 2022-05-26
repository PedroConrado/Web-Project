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
        products[male] = await Product.getMaleProducts()
        products[female] = await Product.getFemaleProducts()
        products[kids] = await Product.getKidsProducts()
        return products;
    }

    static async getMaleProducts() {
        let products = []
        for (const product of productsList.filter(obj => obj.category === male)) {
            const productObj = new Product(product);
            products.push(productObj);
        }
        return products;
    }
    static async getFemaleProducts() {
        let products = []
        for (const product of productsList.filter(obj => obj.category === female)) {
            const productObj = new Product(product);
            products.push(productObj);
        }
        return products;
    }

    static async getKidsProducts() {
        let products = []
        for (const product of productsList.filter(obj => obj.category === kids)) {
            const productObj = new Product(product);
            products.push(productObj);
        }
        return products;
    }



    static async getproductById(id) {
        const products = productsList.filter(obj => obj.id === id);
        if (products.length === 0)
            return null;
        return new Product(products[0]);
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
        image3d: "",
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
        image3d: "",
        category: female,
    }

]