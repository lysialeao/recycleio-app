
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button';

import Logo from '../../assets/logo.png'
import { UserContext } from '../../context/userContext'

export const Menu = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const userItems = [
    {
      label: 'Ache um ponto de coleta',
      icon: 'pi pi-fw pi-search-plus',
      command: () => navigate('/find-collection-point')
    },
    {
      label: 'Perfil',
      icon: 'pi pi-fw pi-user',
      command: () => navigate('/profile')
    }
  ]
  const items = [
    {
      label: 'Ache um ponto de coleta',
      icon: 'pi pi-fw pi-search-plus',
      command: () => navigate('/find-collection-point')
    }
  ]
  const start = <a href='/'><img alt="logo" src={Logo}  height="40" className="mr-2"></img></a>;
  const end = user.login ? <Button label='Sair' icon='pi pi-fw pi-sign-out' severity="danger" onClick={() => navigate('/')} text/> : <Button label='Login' icon='pi pi-fw pi-sign-in' severity="success" onClick={() => navigate('/login')} text/>

  return (
      <div className="card">
        <Menubar
          model={user.login ? userItems : items}
          start={start}
          className="p-menu-end"
          end={end}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        />
      </div>
  )
}
