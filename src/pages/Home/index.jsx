import { FiShoppingCart, FiTag, FiTruck } from 'react-icons/fi'

import { Feature } from '../../components/Feature'
import { Header } from '../../components/Header'
import { useAuth } from '../../hooks/auth'
import { userRoles } from '../../utils/rules'
import { Container } from './styles'

export function Home() {
  const { user } = useAuth()

  return (
    <Container>
      <Header />

      <main>
        <Feature title="Produto" icon={FiTag} to="/product" />

        {user.role === userRoles.admin && (
          <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />
        )}

        {[userRoles.admin, userRoles.sale].includes(user.role) && (
          <Feature
            title="Relatório de vendas"
            icon={FiShoppingCart}
            to="/sales-report"
          />
        )}
      </main>
    </Container>
  )
}
