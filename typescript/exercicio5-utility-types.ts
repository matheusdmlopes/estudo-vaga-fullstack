// ========================================
// EXERCÍCIO 5 - UTILITY TYPES ESSENCIAIS
// ========================================

// Tipo base para exercícios
interface Person {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;
}

// ---------- 1. PARTIAL<T> ----------
// Torna todas as propriedades opcionais

// EXERCÍCIO 1: Complete a função usando Partial<Person>
function updatePerson(id: number, updates: Partial<Person>): Person {
    const existing: Person = {
        id: 1,
        name: "João",
        email: "joao@email.com",
        age: 25,
        isActive: true
    };

    return { ...existing, ...updates };
}

// Teste: descomente para testar
// const updated = updatePerson(1, { name: "João Silva", age: 26 });
// console.log(updated);

// ---------- 2. PICK<T, K> ----------
// Seleciona apenas propriedades específicas

// EXERCÍCIO 2: Complete o tipo PersonCard
type PersonCard = Pick<Person, 'id' | 'name' | 'email'>;

function createCard(person: Person): PersonCard {
    return {
        id: person.id,
        name: person.name,
        email: person.email
    };
}

// EXERCÍCIO 3: Crie PersonProfile que pega apenas 'name' e 'age'
type PersonProfile = Pick<Person, 'name' | 'age'>;

// ---------- 3. OMIT<T, K> ----------
// Remove propriedades específicas

// EXERCÍCIO 4: Complete o tipo PublicPerson
type PublicPerson = Omit<Person, 'id' | 'isActive'>;

function toPublic(person: Person): PublicPerson {
    const { id, isActive, ...publicData } = person;
    return publicData;
}

// EXERCÍCIO 5: Crie PersonFormData removendo apenas 'id'
type PersonFormData = Omit<Person, 'id'>;

// ---------- 4. RECORD<K, V> ----------
// Cria objeto com chaves específicas

// EXERCÍCIO 6: Complete o tipo StatusMessages
type Status = 'loading' | 'success' | 'error';
type StatusMessages = Record<Status, string>;

const messages: StatusMessages = {
    loading: "Carregando...",
    success: "Sucesso!",
    error: "Erro ocorreu!"
};

// EXERCÍCIO 7: Crie UserRolePermissions
type Role = 'admin' | 'user' | 'guest';
type UserRolePermissions = Record<Role, boolean>;

// ========================================
// PARA TESTAR SEUS TIPOS
// ========================================

// Descomente para testar:
/*
function testUtilityTypes() {
    // Test Partial
    const partialUpdate: Partial<Person> = { name: "Novo Nome" };
    console.log("Partial funciona:", updatePerson(1, partialUpdate));

    // Test Pick
    const profile: PersonProfile = { name: "Maria", age: 30 };
    console.log("Pick funciona:", profile);

    // Test Omit
    const formData: PersonFormData = {
        name: "Pedro",
        email: "pedro@email.com",
        age: 28,
        isActive: true
    };
    console.log("Omit funciona:", formData);

    // Test Record
    const permissions: UserRolePermissions = {
        admin: true,
        user: false,
        guest: false
    };
    console.log("Record funciona:", permissions);
}

testUtilityTypes();
*/

// ========================================
// RESPOSTAS - NÃO OLHE ANTES DE TENTAR!
// ========================================
/*
EXERCÍCIO 3: PersonProfile = Pick<Person, 'name' | 'age'>
EXERCÍCIO 5: PersonFormData = Omit<Person, 'id'>  
EXERCÍCIO 7: UserRolePermissions = Record<Role, boolean>
*/ 