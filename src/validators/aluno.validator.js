const { z } = require('zod');

const alunoSchema = z.object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Formato de e-mail inválido"),
    matricula: z.string().min(1, "A matrícula é obrigatória"),
    nota: z.coerce.number().min(0, "A nota não pode ser menor que 0").max(10, "A nota deve ser entre 0 e 10")
});

// Criando o esquema de atualização (tudo vai virar opcional automaticamente)
// Schema de atualização (PUT)
const updateAlunoSchema = alunoSchema.partial().refine((data) => {
  // Verifica se o objeto tem pelo menos uma chave (um campo preenchido)
  return Object.keys(data).length > 0;
}, {
  message: "Você deve fornecer pelo menos um campo para atualização"
});

module.exports = {alunoSchema, updateAlunoSchema}