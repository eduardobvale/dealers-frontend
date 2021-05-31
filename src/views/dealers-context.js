import React, { createContext, useCallback, useReducer } from 'react'
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
  const dispatchThatNeverChanges = useCallback(dispatch, [])
  return (
    <DealersContext.Provider
      value={{ state, dispatch: dispatchThatNeverChanges }}
    >
      {children}
    </DealersContext.Provider>
  )
}

DealersProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
