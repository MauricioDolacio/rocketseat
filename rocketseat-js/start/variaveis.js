//var
var clima = "Quente"
clima = "Frio"
console.log(clima)

let nome = "Marcos"
console.log(nome)

const idade = 18 //const não pode mudar durante seu processamento
//idade = 16 -> causa um erro no programa
console.log(idade)

/* 
JS é fracamente tipado e dinamico.
As variaveis possuem um tipo de dado até receber um valor
Ex:
Fortemente tipado:
int marcos = 11 (Sera sempre int)

Fracamente tipado:
marcos = "Marcos" (Seu tipo varia de acordo com o dado inserido)

Dinamico significa que a variavel pode mudar de acordo com o conteudo
ex = 1
ex = "Ok" (variavel mudou de number para String)
*/

/* 
Scope Var
var é global e local
É aplicado "hoisting" em var, ou seja, antes do código iniciar, todas as var são declaradas (seus valores nao sao atribuidos)

Ex:
A var sera declarada antes do codigo inicial, ent o console.log a exibira como "undefined"
*/

console.log('existe var?', x)

{
    var x = 0
}

console.log('existe var?', x)

/*
Scope Const, Let
São locais e funcionam apenas no escopo onde foram declaradas
O "hoisting" é aplicado quando seu escopo é iniciado
*/

{
    console.log('existe let?, y')
    let y = 0
    console.log('existe let?', y)
}
//console.log('existe let?, y) -> Este codigo dará erro por estar fora do escopo


let z = 0
{
    z = 1
    console.log(z)
}
console.log(z) //aqui "z" será 1 também pois "z" foi modificado, mesmo dentro do escopo.

/* 
Nomes para Variaveis:
Sensitive Case
aceita caracteres Unicode

Não é permitido:
- Iniciar com numeros
- Espaços vazios

Ideal:
- Criar nomes que façam sentido
- Que explique o que a variavel faz
- camelCase
- snake_case
- Escrever em ingles
*/
