import React, { createContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import apiClient from '../operations/api-client'

export const DealersContext = createContext()

/**
 * Provider for tracking the user's activity.
 */
export function DealersProvider({ children }) {
  const [selectedDealer, setSelectedDealer] = useState(null)
  const [dealers, setDealers] = useState([
    { id: 1, latitude: 0, longitude: 0, name: 'edu' },
    { id: 2, latitude: 0.5, longitude: 0.5, name: 'ardo' },
  ])

  console.log('context', { dealers })

  const fetchDealers = async () => {
    const api = apiClient()
    const dealersResponse = await api.get('/api/v1/dealers').catch(() => {})

    if (dealersResponse) {
      setDealers(dealersResponse.data)
    }
  }

  const value = useMemo(
    () => ({
      dealers,
      setDealers,
      selectedDealer,
      setSelectedDealer,
      fetchDealers,
    }),
    [dealers, setDealers, selectedDealer, setSelectedDealer, fetchDealers],
  )

  return (
    <DealersContext.Provider value={value}>{children}</DealersContext.Provider>
  )
}

DealersProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
