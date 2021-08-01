class ClienteController{
    
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: Conta;

    private clientes: Clientes;

    
    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta =
            new Conta('22222', 2000);
        this.clientes = new Clientes();
    }

    
    inserir(evento: Event) {
        evento.preventDefault();
        let cliente = new Cliente(this.inputNome.value,
            this.inputCpf.value, this.inputConta);

        this.clientes.inserir(cliente);
        this.inserirClienteNoHTML(cliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }


}