
let accountListAdmin = [
    {
        name: "Joao",
    },
    {
        name: "Jose",
    },
    {
        name: "Jorge",
    },
]

let accountListClient = [
    {
        name: "Pedro",
    },
    {
        name: "Paulo",
    },
    {
        name: "Pepe",
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
