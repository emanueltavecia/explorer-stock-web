import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { Button } from '../../components/Button'

export function Suppliers() {
  const navigate = useNavigate()
  return (
    <Container>
      <h1>Fornecedores</h1>
      <Button title="Voltar" onClick={() => navigate('/')} />
    </Container>
  )
}
