import Product from "./Product";

class Cart {

    static instance = new Cart();
    
    constructor() {
    }

    static getInstance() {
        return Cart.instance;
    }

    getCart() {
        let cartTxt = localStorage.getItem("cart");
        return cartTxt === null ? {} : JSON.parse(cartTxt);
    }

    async getItemsCart() {
        const cartMap = this.getCart();
        const items = [];
        for(const itemId of Object.keys(cartMap)) {
            const product = await Product.getproductById(parseInt(itemId));
            product.quantity = cartMap[itemId];
            items.push(product);
        }
        return items;
    }

    insertItem(itemId) {
        let cartTxt = localStorage.getItem("cart");
        let cartMap = cartTxt === null ? {} : JSON.parse(cartTxt);
        cartMap[itemId] = 1;
        localStorage.setItem('cart', JSON.stringify(cartMap));
    }

    async increaseQuantity(itemId) {
        let cartTxt = localStorage.getItem("cart");
        let cartMap = cartTxt === null ? {} : JSON.parse(cartTxt);
        if(itemId in cartMap){
            const product = await Product.getproductById(parseInt(itemId));
            if(product.quantityStock>cartMap[itemId])
                cartMap[itemId]++;
            localStorage.setItem('cart', JSON.stringify(cartMap));
        }
        return cartMap[itemId]
    }
    decreaseQuantity(itemId) {
        let cartTxt = localStorage.getItem("cart");
        let cartMap = cartTxt === null ? {} : JSON.parse(cartTxt);
        if(itemId in cartMap){
            cartMap[itemId]--;
            if(cartMap[itemId] <= 0)
               delete cartMap[itemId];
            localStorage.setItem('cart', JSON.stringify(cartMap));
        }
    }

    deleteItem(itemId) {
        let cartTxt = localStorage.getItem("cart");
        let cartMap = cartTxt === null ? [] : JSON.parse(cartTxt);
        delete cartMap[itemId]
        localStorage.setItem('cart', JSON.stringify(cartMap));
    }

    async buyProducts() {
        const cartMap = this.getCart();
        for(const itemId of Object.keys(cartMap)) {
            const productData = await Product.getproductById(parseInt(itemId));
            let newProductData={
                id: productData.id,
                name: productData.name,
                description: productData.description,
                tamanho: productData.tamanho,
                marca: productData.marca,
                category: productData.category,
                price: productData.price,
                quantityStock: productData.quantityStock-cartMap[itemId],
                quantitySold: productData.quantitySold+cartMap[itemId],
                image: productData.image,
                image3d: productData.image3d,
    
            }
            console.log(newProductData)
            await Product.updateProduct(newProductData);
        }
        this.emptyCart();
    }

    emptyCart() {
        localStorage.removeItem('cart');
    }
}

export default Cart.getInstance();