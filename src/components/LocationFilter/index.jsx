import { useState, useContext } from 'react'

import { Dropdown } from 'primereact/dropdown'
import { UserContext } from '../../context/userContext'

import { FORM } from '../../constants/form'

export const LocationFilter = () => {
  const [location, setLocation] = useState()

  const { user } = useContext(UserContext)

  const userLocations = [
    {
      name: `${user?.address?.street}, ${user?.address?.number} `,
      code: user?.address?.zip_code
    }
  ]

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={location}
        onChange={(e) => setLocation(e.value)}
        options={user.login && userLocations}
        optionLabel="name"
        editable placeholder={FORM.ENTRY_LOCATION}
        className="w-full md:w-14rem"
        maxLength={8}
      />
    </div>
)
}