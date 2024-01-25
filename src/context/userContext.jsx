import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'

import { toast } from 'react-hot-toast'

import { getAddress } from '../services/login'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({ login: false })
  const [loading, setLoading] = useState(false)

  

  const getUserAddress = async ({ id }) => {
    await getAddress({ id })
      .then(({ data} ) => setUser((prevState) => ({
        ...prevState,
        address: data.address[0]
      })))
      .catch((error) =>  toast.error(error.message))
  }

  useEffect(() => {
    if (user.login) {
      getUserAddress({ id: user?.data?.address_id})
    }
  }, [user.login])

  const signout = () => {
    setUser({
      login: false
    })
  }

  const values = {
    user,
    setUser,
    loading,
    setLoading,
    signout
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