import React from 'react'
import { DealersProvider } from './views/dealers-context'
import DealersPage from './views/dealers-page'

function App() {
  return (
    <DealersProvider>
      <DealersPage />
    </DealersProvider>
  )
}

export default App
