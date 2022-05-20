

class Product {

    name;
	image;
	description;
	price;
	qtInStock;
	qtSold;
	ThreeDModel;
	id;
  
	constructor(name, image, description, price, qtInStock, qtSold, ThreeDModel, id) {
		this.name = name;
		this.image = image;
		this.description = description;
		this.price = price;
		this.qtInStock = qtInStock;
		this.qtSold = qtSold;
		this.ThreeDModel=ThreeDModel;
		this.id=id;
	}
  
      
}

export default function getProductList(){
	productList = []
	
	return productList
}

function delay(){
    return new Promise(function(resolve) {
        setTimeout(resolve, 100);
    });
}

async function readProductById(id){
    await delay();
    lista=getProductList()
    for(i in lista){
        if(i.id==id) return i
    }
    return null
}
