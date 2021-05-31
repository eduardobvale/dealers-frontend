import React, { useContext } from 'react'
import { Box } from '@material-ui/core'
import DealerMap from './dealer-map'
import DealerList from './dealer-list'
import { DealersContext } from './dealers-context'

function DealerPage() {
  const { dealers } = useContext(DealersContext)
  console.log('page')
  return (
    <Box display="flex" height="100vh">
      <DealerMap dealers={dealers} />
      <DealerList flex={1} dealers={dealers} />
    </Box>
  )
}

export default DealerPage
