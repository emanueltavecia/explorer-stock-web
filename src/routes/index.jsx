import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import { useEffect } from 'react'
import { api } from '../services/api'
import { userRoles } from '../utils/rules'
import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'
import { CustomerRoutes } from './customer.routes'
import { SaleRoutes } from './sale.routes'

export function Routes() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    api
      .get('/users/validate')
      .then((data) => console.log(data))
      .catch((error) => {
        if (error.response?.status === 401) {
          signOut()
        }
      })
  }, [])

  function AccessRoute() {
    switch (user.role) {
      case userRoles.admin:
        return <AdminRoutes />
      case userRoles.sale:
        return <SaleRoutes />
      case userRoles.customer:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  )
}
