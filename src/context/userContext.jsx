import { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)

  const values = {
    user,
    setUser,
    loading,
    setLoading
  }

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}