import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export const DealersContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'setSelected':
      return { selectedDealer: action.payload }
    default:
      throw new Error()
  }
}
export function DealersProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { selectedDealer: null })

  return (
    <DealersContext.Provider value={{ state, dispatch }}>
      {children}
    </DealersContext.Provider>
  )
}

DealersProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
