// primeiro importa o express
const express = require("express");
const { getHome, criarAlunoController, listarAlunosController, buscarAlunosPorIdController, atualizarAlunoController, deletarAlunoController } = require('../controllers/alunos_controller')
const {authMiddleware} = require('../middlewares/auth.middleware')

// cria a aplicação express
const router = express.Router();

// cria um endpoint
router.get("/home", getHome)

//rota para criar aluno
router.post('/alunos', authMiddleware, criarAlunoController)

//rota para listar alunos
router.get('/alunos',listarAlunosController )

//rota para listar alunos por id
router.get('/alunos/:id', buscarAlunosPorIdController)

//rota para atualizar aluno
router.put('/alunos/:id', authMiddleware, atualizarAlunoController)

//rota para deletar aluno
router.delete('/alunos/:id', authMiddleware, deletarAlunoController)

// exporta o modulo
module.exports = router