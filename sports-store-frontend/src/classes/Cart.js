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
        return cartTxt === null ? cartTxt : JSON.parse(cartTxt);
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

    increaseQuantity(itemId) {
        let cartTxt = localStorage.getItem("cart");
        let cartMap = cartTxt === null ? {} : JSON.parse(cartTxt);
        if(itemId in cartMap){
            cartMap[itemId]++;
            localStorage.setItem('cart', JSON.stringify(cartMap));
        }
    }
    decreaseQuantity(itemId) {
        let cartTxt = localStorage.getItem("cart");
        let cartMap = cartTxt === null ? {} : JSON.parse(cartTxt);
        if(itemId in cartMap){
            cartMap[itemId]--;
            if(cartMap[itemId] == 0)
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

    emptyCart() {
        localStorage.removeItem('cart');
    }
}

export default Cart.getInstance();