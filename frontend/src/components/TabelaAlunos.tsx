import type { Aluno } from '../types/aluno'

interface Props {
  alunos: Aluno[]
  onEditar: (aluno: Aluno) => void
  onExcluir: (id: number) => void
}

export function TabelaAlunos({ alunos, onEditar, onExcluir }: Props) {
  if (alunos.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>Nenhum aluno encontrado.</p>
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: '#1a1a1a' }}>
      <thead>
        <tr style={{ backgroundColor: '#333' }}>
          <th style={tableHeaderStyle}>Matrícula</th>
          <th style={tableHeaderStyle}>Nome</th>
          <th style={tableHeaderStyle}>Nota</th>
          <th style={tableHeaderStyle}>Situação</th>
          <th style={tableHeaderStyle}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map(aluno => (
          <tr key={aluno.id} style={{ borderBottom: '1px solid #333' }}>
            <td style={tableCellStyle}>{aluno.matricula}</td>
            <td style={tableCellStyle}>{aluno.nome}</td>
            <td style={tableCellStyle}>{aluno.nota}</td>
            <td style={{ 
              ...tableCellStyle, 
              color: aluno.situacao === 'APROVADO' ? '#4ade80' : '#f87171',
              fontWeight: 'bold'
            }}>
              {aluno.situacao}
            </td>
            <td style={tableCellStyle}>
              <button 
                onClick={() => onEditar(aluno)}
                style={{ marginRight: '10px', color: '#60a5fa', background: 'none', border: '1px solid #60a5fa', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}
              >
                Editar
              </button>
              <button 
                onClick={() => onExcluir(aluno.id)} 
                style={{ color: '#f87171', background: 'none', border: '1px solid #f87171', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const tableHeaderStyle: React.CSSProperties = {
  padding: '12px',
  textAlign: 'center',
  borderBottom: '2px solid #444'
}

const tableCellStyle: React.CSSProperties = {
  padding: '12px',
  textAlign: 'center'
}