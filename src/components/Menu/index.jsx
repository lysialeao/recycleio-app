import { useContext, useState, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

import { UserContext } from '../../context/userContext'

import { Container, Content } from './styles'

import { userItems, collectionPointItems, notLoggedItems } from '../../constants/menu'

export const Menu = () => {
  const [items, setItems] = useState([])

  const { user } = useContext(UserContext)

  const { login, data } = user || false

  const getItems = () => {
    let items

    if(login) {
      if (data.cnpj) items = collectionPointItems
      if(data.cpf) items = userItems
    }else {
      items = notLoggedItems
    }

    return setItems(items)
  }
 
  useEffect(() => {
    getItems()
  }, [login])

  return (
    <Container>
      <NavLink to='/'>
        recycleio
      </NavLink>
      <Content>
        { items?.map((item) => {
          return (
            <NavLink to={item.route}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? 'bold' : 'normal',
                  borderBottom: isActive ? 'solid 1px' : 'none'
                }
              }}
            >
              {item.label}
            </NavLink>
          )
        })}
       </Content>
    </Container>
  )
}