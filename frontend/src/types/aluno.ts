export interface Aluno{
    id: number;
    nome: string;
    email: string;
    matricula: string;
    nota: number
    situacao: 'APROVADO' | 'REPROVADO';
}