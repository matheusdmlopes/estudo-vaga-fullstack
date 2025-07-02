type ID = number | string

interface User {
    id: ID;
    name: string;
    email: string;
}

const user: User = {
    id: 1,
    name: "matheus",
    email: "matheus@gmail.com"
}

function getUser(id: ID) {
    if (id === user.id) {
        return user
    }
}

console.log(getUser(2))