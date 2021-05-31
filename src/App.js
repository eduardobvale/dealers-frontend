import React from 'react'
import DealerPage from './views/dealer-page'
import { DealersProvider } from './views/dealers-context'

function App() {
  console.log('App')
  return (
    <DealersProvider>
      <DealerPage />
    </DealersProvider>
  )
}

export default App
