const Turma = require('./Turma');


class TurmaPresencial extends Turma{
    #frequencia;
    constructor(codigo, nota, frequencia){
        super(codigo, nota);
        this.#frequencia = frequencia;
        
    }
    aprovado(){
        return super.aprovado() && this.#frequencia >=75;
    }
}

module.exports = TurmaPresencial;
