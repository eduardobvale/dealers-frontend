import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import DealerMap from './dealer-map'
import DealerList from './dealer-list'
import apiClient from '../operations/api-client'

function DealersPage() {
  const [dealers, setDealers] = useState([])

  const fetchDealers = async () => {
    const api = apiClient()
    const dealersResponse = await api.get('/api/v1/dealers').catch(() => {})

    if (dealersResponse) {
      setDealers(dealersResponse.data)
    }
  }

  useEffect(() => {
    fetchDealers()
  }, [])

  return (
    <Box display="flex" height="100vh">
      <DealerMap dealers={dealers} />
      <DealerList flex={1} dealers={dealers} />
    </Box>
  )
}

export default DealersPage
