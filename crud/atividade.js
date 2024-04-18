class Pessoa {
    constructor(nome, idade, cidade) {
        this.id = Pessoa.gerarId();
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }

    static gerarId() {
        return Math.floor(Math.random() * 1000);
    }
}

class GerenciadorPessoas {
    constructor() {
        this.pessoas = [];
    }

    cadastrarPessoa(pessoa) {
        this.pessoas.push(pessoa);
    }

    atualizarPessoa(id, camposAtualizados) {
        const pessoaIndex = this.pessoas.findIndex(p => p.id === id);
        if (pessoaIndex !== -1) {
            Object.assign(this.pessoas[pessoaIndex], camposAtualizados);
        }
    }

    deletarPessoa(id) {
        this.pessoas = this.pessoas.filter(p => p.id !== id);
    }

    listarPessoas() {
        return this.pessoas;
    }
}

// Testando o código
const gerenciador = new GerenciadorPessoas();

gerenciador.cadastrarPessoa(new Pessoa('Alice', 30, 'Belo Horizonte'));
gerenciador.cadastrarPessoa(new Pessoa('Carlos', 45, 'Salvador'));
gerenciador.cadastrarPessoa(new Pessoa('Mariana', 22, 'São Paulo'));
gerenciador.cadastrarPessoa(new Pessoa('Rafael', 27, 'Rio de Janeiro'));
gerenciador.cadastrarPessoa(new Pessoa('Isabela', 35, 'Sarandi'));


gerenciador.atualizarPessoa(gerenciador.pessoas[0].id, { idade: 22 });

gerenciador.deletarPessoa(gerenciador.pessoas[1].id);

const resultado = gerenciador.listarPessoas();
console.log(resultado);
