export default class Product {
    constructor(id, name, description, price, quantityStock, quantitySold, image, image3d) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantityStock = quantityStock;
        this.quantitySold = quantitySold;
        this.image = image;
        this.image3d = image3d;
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
        let products = []
        for (const product of productsList) {
            const productObj = new Product(...product);
            products.push(productObj);
        }
        return products;
    }


    static async getproductById(id) {
        const products = productsList.filter(obj => obj.id === id);
        if (products.length === 0)
            return null;
        return new Product(...products[0]);
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
        image: "",
        image3d: "",
    },
    {
        id: 2,
        name: "Puma Ball",
        description: "Nice ball :)",
        price: 30.00,
        quantityStock: 100,
        quantitySold: 20,
        image: "",
        image3d: "",
    },

]