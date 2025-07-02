type ID = number | string

type User = {
    id: ID;
    name: string;
    profileURL: string;
    repositories: number;
}

const users: User[] = [
    {
        id: 1,
        name: 'João Paulo Aramuni',
        profileURL: 'https://github.com/joaopauloaramuni',
        repositories: 19,
    },
    {
        id: '2',
        name: 'Rafaella Ballerini',
        profileURL: 'https://github.com/rafaballerini',
        repositories: 47,
    },
    {
        id: 3,
        name: 'Capi Etheriel',
        profileURL: 'https://github.com/barraponto',
        repositories: 340,
    },
]

const getUserNames = (userList: User[]): string[] => userList.map((element: User) => element.name)

const getUsersByRepoQuantity = (users: User[], repos: number) => users.filter((element) => element.repositories >= repos).map((element) => element.name)

const isMostActiveUser = (name: string, users: User[]) => {
    const mostActiveUser = users.reduce((prev, curr) => (prev.repositories > curr.repositories ? prev : curr));
    return mostActiveUser.name === name;
}

console.log(`Lista de pessoas usuárias do Github: ${getUserNames(users)}.`);

console.log(
    `Pessoas com pelo menos 20 repositórios: ${getUsersByRepoQuantity(users, 20)}.`,
);

console.log(
    `Essa é a conta mais ativa da lista? ${isMostActiveUser('João Paulo Aramuni', users)}.`,
);

console.log(
    `Essa é a conta mais ativa da lista? ${isMostActiveUser('Capi Etheriel', users)}`
);