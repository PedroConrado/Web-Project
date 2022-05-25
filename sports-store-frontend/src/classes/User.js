export default class User {
    constructor(id, name, email, password, phone, address, profilePicture, isAdmin) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.profilePicture = profilePicture;
        this.isAdmin = isAdmin;
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
                user = new User(...obj);
                return;
            }
        })
        if(user !== undefined)
            return user;
        else
            throw new Error("Usuário não encontrado!");
    }

    static async getUsers() {
        let users = []
        for (const user of usersList) {
            const userObj = new User(...user);
            users.push(userObj);
        }
        return users;
    }

    static async getClients() {
        let users = []
        for (const user of usersList.filter(obj => !obj.isAdmin)) {
            const userObj = new User(...user);
            users.push(userObj);
        }
        return users;
    }

    static async getAdmins() {
        let users = []
        for (const user of usersList.filter(obj => obj.isAdmin)) {
            const userObj = new User(...user);
            users.push(userObj);
        }
        return users;
    }

    static async getUserById(id) {
        const users = usersList.filter(obj => obj.id === id);
        if (users.length === 0)
            return null;
        return new User(...users[0]);
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

]