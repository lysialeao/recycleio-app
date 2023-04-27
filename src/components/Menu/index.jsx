
import { Menubar } from 'primereact/menubar'
import Logo from '../../assets/logo.png'

export const Menu = () => {
  const user = false
  const userItems = [
    {
      label: 'Ache um ponto de coleta',
      icon: 'pi pi-fw pi-search-plus',
    },
    {
      label: 'Perfil',
      icon: 'pi pi-fw pi-user',
    },
    {
      label: 'Sair',
      icon: 'pi pi-fw pi-power-off'
  }
  ]
  const items = [
    {
      label: 'Ache um ponto de coleta',
      icon: 'pi pi-fw pi-search-plus',
    }
  ]
  const start = <img alt="logo" src={Logo}  height="40" className="mr-2"></img>;
  return (
    <div>
      <div className="card">
        <Menubar
          model={user? userItems : items}
          start={start}
        />
      </div>
    </div>
  )
}
