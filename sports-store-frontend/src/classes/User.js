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

    static async login(email, password) {
        let user = undefined;
        usersList.forEach(obj => {
            if(obj.email === email && obj.password === password) {
                localStorage.setItem("user", JSON.stringify(obj));
                user = new User(obj);
                return;
            }
        })
        if(user !== undefined)
            return user;
        else
            throw new Error("Usuário não encontrado!");
    }

    static async logout() {
        localStorage.clear();
    }

    static async getUsers() {
        let users = []
        for (const user of usersList) {
            const userObj = new User(user);
            users.push(userObj);
        }
        return users;
    }

    static async getClients() {
        let users = []
        for (const user of usersList.filter(obj => !obj.isAdmin)) {
            const userObj = new User(user);
            users.push(userObj);
        }
        return users;
    }

    static async getAdmins() {
        let users = []
        for (const user of usersList.filter(obj => obj.isAdmin)) {
            const userObj = new User(user);
            users.push(userObj);
        }
        return users;
    }

    static async getUserById(id) {
        const users = usersList.filter(obj => obj.id === id);
        if (users.length === 0)
            return null;
        return new User(users[0]);
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