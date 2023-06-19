
import { useNavigate } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'
import Logo from '../../assets/logo.png'
import { useContext } from 'react'
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
    },
    {
      label: 'Sair',
      icon: 'pi pi-fw pi-sign-out',
      command: () => navigate('/')
  }
  ]
  const items = [
    {
      label: 'Ache um ponto de coleta',
      icon: 'pi pi-fw pi-search-plus',
      command: () => navigate('/find-collection-point')
    },
    {
      label: 'Login',
      icon: 'pi pi-fw pi-sign-in',
      command: () => navigate('/login')
    }
  ]
  const start = <a href='/'><img alt="logo" src={Logo}  height="40" className="mr-2"></img></a>;
  return (
    <div>
      <div className="card" >
        <Menubar
          model={user.login ? userItems : items}
          start={start}
          className="p-menu-end"
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        />
      </div>
    </div>
  )
}
