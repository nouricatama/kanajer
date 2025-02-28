import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './AppContext.jsx'
import { UserContextProvider } from './UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AppContextProvider>
  </React.StrictMode>
)
