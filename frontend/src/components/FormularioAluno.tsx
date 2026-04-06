import { useState, useEffect, type FormEvent } from 'react'
import api from '../services/api'
import type { Aluno } from '../types/aluno'

interface Props {
  onSucesso: () => void
  dadosParaEditar: Aluno | null
  onCancelar: () => void
}

export function FormularioAluno({ onSucesso, dadosParaEditar, onCancelar }: Props) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [matricula, setMatricula] = useState('')
  const [nota, setNota] = useState('')

  useEffect(() => {
    if (dadosParaEditar) {
      setNome(dadosParaEditar.nome)
      setEmail(dadosParaEditar.email)
      setMatricula(dadosParaEditar.matricula)
      setNota(String(dadosParaEditar.nota))
    } else {
      setNome(''); setEmail(''); setMatricula(''); setNota('')
    }
  }, [dadosParaEditar])

  const salvar = async (e: FormEvent) => {
    e.preventDefault()
    const corpo = { nome, email, matricula, nota: Number(nota) }

    try {
      if (dadosParaEditar) {
        await api.put(`/alunos/${dadosParaEditar.id}`, corpo)
      } else {
        await api.post('/alunos', corpo)
      }
      onSucesso()
    } catch (error: any) {
      alert(error.response?.data?.mensagem || "Erro ao salvar")
    }
  }

  return (
    <form onSubmit={salvar} style={{ 
      marginBottom: '40px', 
      padding: '20px', 
      border: '1px solid #444', 
      borderRadius: '8px',
      backgroundColor: '#1a1a1a' 
    }}>
      <h3 style={{ marginTop: 0 }}>{dadosParaEditar ? '📝 Editando Aluno' : '➕ Cadastrar Novo Aluno'}</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <input 
          type="text" placeholder="Nome" value={nome} 
          onChange={(e) => setNome(e.target.value)} required 
          style={inputStyle}
        />
        <input 
          type="email" placeholder="E-mail" value={email} 
          onChange={(e) => setEmail(e.target.value)} required 
          style={inputStyle}
        />
        <input 
          type="text" placeholder="Matrícula" value={matricula} 
          onChange={(e) => setMatricula(e.target.value)} required 
          style={inputStyle}
        />
        <input 
          type="number" placeholder="Nota" value={nota} 
          onChange={(e) => setNota(e.target.value)} min="0" max="10" step="0.1" required 
          style={inputStyle}
        />
        
        
        <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
          <button type="submit" style={{ 
            backgroundColor: dadosParaEditar ? '#28a745' : '#007bff', 
            color: 'white', border: 'none', padding: '10px 30px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' 
          }}>
            {dadosParaEditar ? 'Salvar Alterações' : 'Cadastrar Aluno'}
          </button>

          {dadosParaEditar && (
            <button type="button" onClick={onCancelar} style={{ 
              backgroundColor: '#666', color: 'white', border: 'none', padding: '10px 30px', cursor: 'pointer', borderRadius: '4px' 
            }}>
              Cancelar
            </button>
          )}
        </div>
      </div>
    </form>
  )
}


const inputStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #333',
  backgroundColor: '#2a2a2a',
  color: 'white'
}