import './App.css'
import Router from './shared/Router'
import React from 'react'
import { Heading, createSystem, defaultConfig } from '@chakra-ui/react'
import { Provider } from './components/ui/provider'
import { defaultSystem } from '@chakra-ui/react'
import Sidebar from './components/Sidebar';
import { Box, Flex } from '@chakra-ui/react';


export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif`},
      },
    },
  },
})

function App() {

  return (
    <Provider value={defaultSystem}>
      <Flex>
        <Sidebar />
        <Box ml="250px" p={4} flex="1">
          <Router />
          </Box>
          </Flex> 
    </Provider>
  )
}

export default App
