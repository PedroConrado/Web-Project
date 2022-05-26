import Account from '../Account';

class Client extends Account {

    
}

export default function getClientList(){
	clientList = []

	return clientList
}

function delay(){
    return new Promise(function(resolve) {
        setTimeout(resolve, 100);
    });
}

async function readClientById(id){
    await delay();
    lista=getClientList()
    for(i in lista){
        if(i.id==id) return i
    }
    return null
}

