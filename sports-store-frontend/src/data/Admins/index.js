import Account from '../Account';


class Admin extends Account {

    
}

export default function getAdminList(){
	productList = []

	return productList
}

function delay(){
    return new Promise(function(resolve) {
        setTimeout(resolve, 100);
    });
}

async function readAdminById(id){
    await delay();
    lista=getAdminList()
    for(i in lista){
        if(i.id==id) return i
    }
    return null
}
