/* eslint-disable global-require */
import React, { useContext, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import dealerShape from '../operations/dealer-shape'
import { DealersContext } from './dealers-context'

const CustomMarker = React.memo(({ dealer, dispatch }) => {
  const eventHandlers = useMemo(
    () => ({
      click() {
        dispatch({ type: 'setSelected', payload: dealer })
      },
    }),
    [dispatch],
  )

  return (
    <Marker
      eventHandlers={eventHandlers}
      key={dealer.id}
      position={[dealer.latitude, dealer.longitude]}
    />
  )
})

CustomMarker.propTypes = {
  dealer: dealerShape,
  dispatch: PropTypes.func.isRequired,
}

function MapCentralizer() {
  const map = useMap()
  const {
    state: { selectedDealer },
  } = useContext(DealersContext)

  useEffect(() => {
    if (selectedDealer) {
      map.setView([selectedDealer.latitude, selectedDealer.longitude])
    }
  }, [selectedDealer])

  return null
}

function DealerMap({ dealers }) {
  const { dispatch } = useContext(DealersContext)
  return (
    <MapContainer
      center={[0, 0]}
      style={{ height: '100vh', width: '100wh', flex: 1 }}
      zoom={5}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapCentralizer />
      {dealers.map((dealer) => (
        <CustomMarker dispatch={dispatch} key={dealer.id} dealer={dealer} />
      ))}
    </MapContainer>
  )
}

DealerMap.propTypes = {
  dealers: PropTypes.arrayOf(dealerShape),
}

export default DealerMap
