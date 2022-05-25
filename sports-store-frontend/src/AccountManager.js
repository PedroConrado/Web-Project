
let accountListAdmin = [
    {
        name: "Joao",
        phone: "991318888",
        adress: "rua Jacinto 884",
        email: "joao@gmail.com",
        senha: "1234",
        isAdmin: true,
        id: 1,
    },
    {
        name: "Jose",
        phone: "98765766",
        adress: "rua Salomao 333",
        email: "jose@gmail.com",
        senha: "1234",
        isAdmin: true,
        id: 2,
    },
    {
        name: "Jorge",
        phone: "976843232",
        adress: "rua Trabalhador 123",
        email: "jorge@gmail.com",
        senha: "1234",
        isAdmin: true,
        id: 3,
    },
]

let accountListClient = [
    {
        name: "Pedro",
        phone: "976843232",
        adress: "rua Jacinto 450",
        email: "pedro@gmail.com",
        senha: "1234",
        isAdmin: false,
        id: 4,
    },
    {
        name: "Paulo",
        phone: "976843232",
        adress: "rua Salomao 555",
        email: "paulo@gmail.com",
        senha: "1234",
        isAdmin: false,
        id: 5,
    },
    {
        name: "Pepe",
        phone: "976843232",
        adress: "rua Trabalhador 999",
        email: "pepe@gmail.com",
        senha: "1234",
        isAdmin: false,
        id: 6,
    },
]

export const getList = async () => {
    return [
        {
            slug: "admin",
            items: accountListAdmin
        },
        {
            slug: "client",
            items: accountListClient
        },
    ]
}

export const getAdminList = async () =>{
    return [
        {
            slug: "admin",
            items: accountListAdmin
        },
    ]
}

export const getClientList = async () =>{
    return [
        {
            slug: "client",
            items: accountListClient
        },
    ]
}

export function getAccountById(id){
    
}
