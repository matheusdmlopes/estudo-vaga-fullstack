// Crie union types que representem: a. Os estados físicos da matéria como strings: líquido, sólido ou gasoso. b. O documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex.: “123.567.890-12” ou 123456789012. c. Sistemas operacionais: Linux, MacOS ou Windows.

type EstadoFisico = 'líquido' | 'gasoso' | 'sólido'
type DocumentoIdentificador = number | string
type SistemaOperacional = 'Linux' | 'MacOS' | 'Windows'

// Crie type aliases para: a. Representar um ou mais nomes de pessoas em uma variável que guarda reservas de restaurante. b. Um objeto que represente um endereço.

type ReservasRestaurante = string[] | string
type Endereco = {
    rua: string;
    numero: number;
    cidade: string;
    estado: string;
}