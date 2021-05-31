/* eslint-disable global-require */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, List, ListItem, ListItemText } from '@material-ui/core'
import dealerShape from '../operations/dealer-shape'
import { DealersContext } from './dealers-context'

function DealerList({ dealers }) {
  const {
    state: { selectedDealer },
    dispatch,
  } = useContext(DealersContext)

  return (
    <Box overflow="auto">
      <List>
        {dealers.map((dealer) => (
          <ListItem
            onClick={() => dispatch({ type: 'setSelected', payload: dealer })}
            key={dealer.id}
            selected={selectedDealer && selectedDealer.id === dealer.id}
          >
            <ListItemText primary={dealer.name} secondary={dealer.phone} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

DealerList.propTypes = {
  dealers: PropTypes.arrayOf(dealerShape),
}

export default DealerList
