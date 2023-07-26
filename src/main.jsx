import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { UserProvider } from './context/userContext.jsx'
import { CollectionProvider } from './context/useCollection.jsx'
import { WasteProvider } from './context/useWaste.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CollectionProvider>
      <WasteProvider>
        <App />
      </WasteProvider>
      </CollectionProvider>
    </UserProvider>
  </React.StrictMode>,
)
