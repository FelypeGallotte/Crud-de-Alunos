import { useEffect, useState } from 'react'
import api from './services/api'
import type { Aluno } from './types/aluno'
import { FormularioAluno } from './components/FormularioAluno'
import { TabelaAlunos } from './components/TabelaAlunos' 

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [carregando, setCarregando] = useState(true)
  const [alunoParaEditar, setAlunoParaEditar] = useState<Aluno | null>(null)

  const buscarAlunos = async () => {
    try {
      const resposta = await api.get('/alunos')
      setAlunos(resposta.data)
    } finally {
      setCarregando(false)
    }
  }

  const excluirAluno = async (id: number) => {
    if (!confirm("Deseja excluir?")) return
    await api.delete(`/alunos/${id}`)
    setAlunos(alunos.filter(a => a.id !== id))
  }

  useEffect(() => { buscarAlunos() }, [])

  if (carregando) return <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Carregando...</div>

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', color: 'white' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>🎓 Gerenciamento de Alunos</h1>
      
      <FormularioAluno 
        onSucesso={() => { buscarAlunos(); setAlunoParaEditar(null); }} 
        dadosParaEditar={alunoParaEditar}
        onCancelar={() => setAlunoParaEditar(null)}
      />

      <TabelaAlunos 
        alunos={alunos} 
        onEditar={setAlunoParaEditar} 
        onExcluir={excluirAluno} 
      />
    </div>
  )
}

export default App