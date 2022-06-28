import { FaNetworkWired } from "react-icons/fa";

export default class User {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.phone = data.phone;
        this.address = data.address;
        this.profilePicture = data.profilePicture;
        this.isAdmin = data.isAdmin;
    }
    setName(value) {
        this.name = value;
    }
    setEmail(value) {
        this.email = value;
    }
    setPassword(value) {
        this.password = value;
    }
    setPhone(value) {
        this.phone = value;
    }
    setAddress(value) {
        this.address = value;
    }
    setProfilePicture(value){
        this.profilePicture = value;
    }

    
    static async logout() {
        localStorage.clear();
    }

    static async getUsers() {
        let resp = await fetch("http://localhost:3001/users", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = await resp.json();
        let users = []
        for (const user of resp) {
            const userObj = new User(user);
            users.push(userObj);
        }
        return users;
    }

    static async getClients() {
        let resp = await fetch("http://localhost:3001/users", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = await resp.json();
        let users = []
        for (const user of resp.filter(obj => !obj.isAdmin)) {
            const userObj = new User(user);
            users.push(userObj);
        }
        return users;
    }

    static async getAdmins() {
        let resp = await fetch("http://localhost:3001/users", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = await resp.json();
        let users = []
        
        for (const user of resp.filter(obj => obj.isAdmin)) {
            const userObj = new User(user);
            users.push(userObj);
        }
        return users;
    }

    static async getUserById(id) {
        let resp = await fetch('http://localhost:3001/users/'+id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });   
        resp = await resp.json();
        return new User(resp[0]);
    }

    static async updateUser(updatedUser) {
        console.log("updating user");
        console.log(updatedUser.id);
        let imageLink=updatedUser.profilePicture;
        if(imageLink.indexOf("/assests/")===-1  && imageLink.indexOf("http")===-1) imageLink="/assets/"+imageLink;
        try{
            let resp = await fetch('http://localhost:3001/users/'+updatedUser.id, {
                method: "put",
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                    id: updatedUser.id,
                    name: updatedUser.name,
                    phone: updatedUser.phone,
                    address: updatedUser.address,
                    profilePicture: imageLink,
                    email: updatedUser.email,
                    password: updatedUser.password
                }),
            })
        }
        catch(e){
            alert("Error: " + e);
            console.log(e)
        };
    }
    static async addUser(newUser) {
        console.log("creating user")
        let imageLink=newUser.profilePicture;
        if(imageLink.indexOf("/assests/")===-1 && imageLink.indexOf("http")===-1) imageLink="/assets/"+imageLink;
        let resp = await fetch('http://localhost:3001/users', {
            method: "post",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                id: 0,
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                phone: newUser.phone,
                address: newUser.address,
                profilePicture: imageLink,
                isAdmin: newUser.isAdmin
            }),
        })
        .catch(error => {
            alert("Error: " + error);
            console.log(error)
        });
    }

    static async removeUser(id) {
        console.log("deleting")
        await fetch("http://localhost:3001/users/"+id, {
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


let usersList = [
    {
        id: 1,
        name: "Admin",
        email: "admin@admin.com",
        password: "admin",
        phone: "+5518996347405",
        address: "Rua das Saudades",
        profilePicture: "",
        isAdmin: true,
    },
    {
        id: 2,
        name: "Gabriel",
        email: "gabriel_vr@usp.br",
        password: "123456",
        phone: "+5518996347405",
        address: "Rua das Saudades",
        profilePicture: "",
        isAdmin: false,
    },
    {
        id: 3,
        name: "Joao",
        phone: "991318888",
        address: "rua Jacinto 884",
        email: "joao@gmail.com",
        password: "1234",
        profilePicture: "",
        isAdmin: false,
    },
    {
        id: 4,
        name: "Jose",
        phone: "98765766",
        address: "rua Salomao 333",
        email: "jose@gmail.com",
        senha: "1234",
        profilePicture: "",
        isAdmin: false,
    },
    {
        id: 5,
        name: "Jorge",
        phone: "976843232",
        address: "rua Trabalhador 123",
        email: "jorge@gmail.com",
        senha: "1234",
        profilePicture: "",
        isAdmin: false,
    },
    {
        id: 6,
        name: "Pedro",
        phone: "976843232",
        address: "rua Jacinto 450",
        email: "pedro@gmail.com",
        senha: "1234",
        profilePicture: "",
        isAdmin: true,
    },
    {
        id: 7,
        name: "Paulo",
        phone: "976843232",
        address: "rua Salomao 555",
        email: "paulo@gmail.com",
        senha: "1234",
        profilePicture: "",
        isAdmin: true,
    },
    {
        id: 8,
        name: "Pepe",
        phone: "976843232",
        address: "rua Trabalhador 999",
        email: "pepe@gmail.com",
        senha: "1234",
        profilePicture: "",
        isAdmin: true,
    },

]