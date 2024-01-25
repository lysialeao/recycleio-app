import { useContext, useState, useEffect } from 'react'

import { UserContext } from '../../context/userContext'

import logo from '../../assets/logo.png'

import { 
  userItems, 
  collectionPointItems, 
  notLoggedItems 
} from '../../constants/menu'

import {
  Container,
  InnerNavigation,
  ExtendNavigation,
  LeftWrapper,
  RightWrapper,
  WrapperLinks,
  StyledLink,
  Logo,
  OpenLinksButton,
  StyledLinkExtended
} from "./styles"


export const Menu = () => {
  const [items, setItems] = useState([])
  const [extended, setExtended] = useState(false)


  const { user, signout } = useContext(UserContext)

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

    <Container extendedNavigation={extended}>
      <InnerNavigation>
        <LeftWrapper>
          <Logo src={logo} />
        </LeftWrapper>
        <RightWrapper>
        <WrapperLinks>
          { items?.map((item) => {
          return (
            <StyledLink to={item.route}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? 'bold' : 'normal',
                  borderBottom: isActive ? 'solid 1px' : 'none'
                }
              }}
            >
              {item.label}
            </StyledLink>
          )
        })}
        {
          user?.login && (
            <StyledLink to={'/'}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? 'bold' : 'normal',
                  borderBottom: isActive ? 'solid 1px' : 'none'
                }
              }}
              onClick={signout}
            >
              Sair
            </StyledLink>
          )
        }
          </WrapperLinks>
          <OpenLinksButton onClick={() => setExtended((curr) => !curr)}>
            {extended ? <> &#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
         
        </RightWrapper>
      </InnerNavigation>
      {
        extended && (
          <ExtendNavigation>
            { items?.map((item) => {
              return (
                <StyledLinkExtended to={item.route}
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? 'bold' : 'normal',
                      borderBottom: isActive ? 'solid 1px' : 'none'
                    }
                  }}
                >
                  {item.label}
                </StyledLinkExtended>
              )
            })}
            {
              user?.login && (
                <StyledLinkExtended to={'/'}
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? 'bold' : 'normal',
                      borderBottom: isActive ? 'solid 1px' : 'none'
                    }
                  }}
                  onClick={signout}
                >
                  Sair
                </StyledLinkExtended>
              )
            }
          </ExtendNavigation>
        )
      }
    </Container>
  );
}