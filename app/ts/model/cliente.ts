class Cliente{
    private _nome;
    private _cpf;
    private _conta;

    constructor(nome: string, cpf: string, conta: Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(){
        return this._nome;
    }
    get cpf(){
        return this._cpf;
    }
    get conta(){
        return this._conta;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }
    set cpf(novoCpf){
        this._cpf = novoCpf;
    }
    set conta(novaConta: Conta){
        this._conta = novaConta;
    }

    
    toString(): string {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}
        - Conta: ${this._conta}`;
    }

}

