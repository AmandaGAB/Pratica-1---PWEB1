let contaController = new ContaController();

contaController.listar();


const c1 = new Conta('1', 100);
const c2 = new Conta('5', 500);
const c3 = new Conta('6', 6600);
const c4 = new Conta('7', 1200);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

let clienteController = new ClienteController();

clienteController.listar();

let clientes = new Clientes();
let cliente1 = new Cliente("Amanda", "101212", c1);
let cliente2 = new Cliente("Adnmanda", "331212", c2);

clientes.inserir(cliente1);
clientes.inserir(cliente2);
console.log(clientes.listar());
clientes.remover("101212");

let cliente3= new Cliente("Gabrielle", "123123", c3);
let cliente4 = new Cliente("Gabriel", "2243124", c4);
clientes.inserir(cliente3);
clientes.inserir(cliente4)