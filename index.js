const Aluno = require('./src/Aluno');
const TurmaPresencial = require('./src/TurmaPresencial');

// Criando um aluno
const aluno = new Aluno('João', 'joao123', '20231234');

// Criando uma turma presencial
const turmaPresencial = new TurmaPresencial('TURMA01', 7.5, 80);

// Verificando se o aluno está aprovado
console.log(`O aluno ${aluno.nome} está aprovado? ${turmaPresencial.aprovado()}`);

// No caso é a turma que diz se o Aluno foi aprovado ou não e as duas classes não parecem ter nenhum tipo de relacionamento,
// foi isso que entendi do diagrama do exercicio prático.
// Era pro aluno ser um atributo de turma? por favor deixe um comentário na entrega
// explicando caso eu tenha feito algo errado.
