import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { api } from '../../services/api'
import { Card, Container } from './styles'

export function SalesReport() {
  const [data, setData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    api.get('/sales').then((res) => setData(res.data))
  }, [])

  return (
    <Container>
      <h1>Relatório de Vendas</h1>

      <div>
        {data.map((sale) => (
          <Card key={sale}>{sale}</Card>
        ))}
      </div>

      <Button title="Voltar" onClick={() => navigate('/')} />
    </Container>
  )
}
