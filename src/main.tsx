import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import Header from './features/header/index'
import HomePage from './pages/HomePage'
import './assets/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header/>
      <HomePage/>
    </ChakraProvider>
  </React.StrictMode>
)
