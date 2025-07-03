// ========================================
// EXERCÍCIO 6 - ASYNC/AWAIT TIPADO
// ========================================

// Tipos para os exercícios
interface UserData {
    id: number;
    name: string;
    email: string;
}

interface ApiError {
    message: string;
    status: number;
}

// ---------- 1. PROMISE<T> BÁSICO ----------

// Exemplo: Função que simula buscar usuário
function fetchUserData(id: number): Promise<UserData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({
                    id,
                    name: `User${id}`,
                    email: `user${id}@email.com`
                });
            } else {
                reject(new Error('ID inválido'));
            }
        }, 1000);
    });
}

// EXERCÍCIO 1: Crie uma função que retorna Promise<string>
function getWelcomeMessage(name: string): Promise<string> {
    // Complete aqui - retorne uma Promise que resolve com uma mensagem
    return Promise.resolve(`Bem-vindo, ${name}!`);
}

// ---------- 2. ASYNC/AWAIT COM TIPOS ----------

// Exemplo: Função async com tipagem correta
async function getUserName(id: number): Promise<string | null> {
    try {
        const user = await fetchUserData(id);
        return user.name;
    } catch (error) {
        console.error('Erro:', error);
        return null;
    }
}

// EXERCÍCIO 2: Crie função async que retorna email do usuário
async function getUserEmail(id: number): Promise<string | null> {
    // Complete aqui
    try {
        const user = await fetchUserData(id);
        return user.email;
    } catch {
        return null;
    }
}

// ---------- 3. ERROR HANDLING TIPADO ----------

// Tipo para resultado que pode dar erro
type Result<T> = {
    success: true;
    data: T;
} | {
    success: false;
    error: ApiError;
};

// Exemplo: Função que trata erros de forma tipada
async function safeGetUser(id: number): Promise<Result<UserData>> {
    try {
        const user = await fetchUserData(id);
        return { success: true, data: user };
    } catch (error) {
        return {
            success: false,
            error: {
                message: error instanceof Error ? error.message : 'Erro desconhecido',
                status: 400
            }
        };
    }
}

// EXERCÍCIO 3: Crie função que busca usuário e retorna Result<string> com o nome
async function safeGetUserName(id: number): Promise<Result<string>> {
    // Complete aqui
    try {
        const user = await fetchUserData(id);
        return { success: true, data: user.name };
    } catch (error) {
        return {
            success: false,
            error: {
                message: error instanceof Error ? error.message : 'Erro',
                status: 400
            }
        };
    }
}

// ---------- 4. MÚLTIPLAS PROMISES ----------

// EXERCÍCIO 4: Busque múltiplos usuários em paralelo
async function getMultipleUsers(ids: number[]): Promise<UserData[]> {
    // Complete aqui - use Promise.all
    const promises = ids.map(id => fetchUserData(id));
    return Promise.all(promises);
}

// EXERCÍCIO 5: Busque usuários mas falhe se algum der erro
async function getAllUsersOrFail(ids: number[]): Promise<UserData[] | null> {
    // Complete aqui
    try {
        return await getMultipleUsers(ids);
    } catch {
        return null;
    }
}

// EXERCÍCIO 6: Busque usuários ignorando os que falharem
async function getUsersIgnoringErrors(ids: number[]): Promise<UserData[]> {
    // Complete aqui - use Promise.allSettled
    const results = await Promise.allSettled(
        ids.map(id => fetchUserData(id))
    );

    return results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.status === 'fulfilled' ? result.value : null)
        .filter((user): user is UserData => user !== null);
}

// ---------- 5. TIMEOUT E RACE ----------

// Função helper para timeout
function timeout(ms: number): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), ms);
    });
}

// EXERCÍCIO 7: Busque usuário com timeout de 2 segundos
async function getUserWithTimeout(id: number): Promise<UserData | null> {
    // Complete aqui - use Promise.race
    try {
        return await Promise.race([
            fetchUserData(id),
            timeout(2000)
        ]);
    } catch {
        return null;
    }
}

// ========================================
// EXERCÍCIO INTEGRADO
// ========================================

// EXERCÍCIO 8: Combine tudo que aprendeu
// Crie uma função que:
// 1. Busca múltiplos usuários
// 2. Ignora erros individuais  
// 3. Retorna apenas os emails
// 4. Com timeout de 3 segundos por usuário

async function getUserEmailsWithTimeout(ids: number[]): Promise<string[]> {
    // Complete aqui
    const userPromises = ids.map(async id => {
        try {
            return await Promise.race([
                fetchUserData(id),
                timeout(3000)
            ]);
        } catch {
            return null;
        }
    });

    const users = await Promise.all(userPromises);
    return users
        .filter((user): user is UserData => user !== null)
        .map(user => user.email);
}

// ========================================
// PARA TESTAR
// ========================================

// Descomente para testar:
/*
async function testAsyncFunctions() {
    console.log('=== TESTANDO ASYNC/AWAIT ===');

    // Test básico
    const message = await getWelcomeMessage('João');
    console.log('Welcome:', message);

    // Test com erro
    const result = await safeGetUser(-1);
    console.log('Safe result:', result);

    // Test múltiplos
    const users = await getUsersIgnoringErrors([1, 2, -1, 3]);
    console.log('Users (ignoring errors):', users);

    // Test timeout
    const userWithTimeout = await getUserWithTimeout(1);
    console.log('User with timeout:', userWithTimeout);

    // Test integrado
    const emails = await getUserEmailsWithTimeout([1, 2, -1]);
    console.log('Emails with timeout:', emails);
}

testAsyncFunctions();
*/

// ========================================
// CONCEITOS IMPORTANTES
// ========================================
/*
1. Promise<T> - Wrapper para valores assíncronos
2. async/await - Sintaxe mais limpa para Promises
3. Try/catch - Error handling em async functions
4. Promise.all - Aguarda todas as Promises
5. Promise.allSettled - Não falha se alguma Promise falhar
6. Promise.race - Primeira Promise que resolver/rejeitar
7. Type guards - Para filtrar tipos union (is PromiseFulfilledResult)
8. Never type - Para funções que nunca retornam
*/ 