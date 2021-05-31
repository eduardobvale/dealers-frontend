/* eslint-disable global-require */
import React, { useContext, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import dealerShape from '../operations/dealer-shape'
import { DealersContext } from './dealers-context'

function CustomMarker({ dealer }) {
  console.log('marker')

  const { setSelectedDealer } = useContext(DealersContext)

  const eventHandlers = useMemo(
    () => ({
      click() {
        setSelectedDealer(dealer)
      },
    }),
    [],
  )

  return (
    <Marker
      eventHandlers={eventHandlers}
      key={dealer.id}
      position={[dealer.latitude, dealer.longitude]}
    />
  )
}

CustomMarker.propTypes = {
  dealer: dealerShape,
}

function MapCentralizer() {
  const map = useMap()
  const { selectedDealer } = useContext(DealersContext)

  useEffect(() => {
    if (selectedDealer) {
      map.setView([selectedDealer.latitude, selectedDealer.longitude])
    }
  }, [selectedDealer])

  return null
}

function DealerMap({ dealers }) {
  console.log('map')
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
        <CustomMarker dealer={dealer} />
      ))}
    </MapContainer>
  )
}

DealerMap.propTypes = {
  dealers: PropTypes.arrayOf(dealerShape),
}

export default DealerMap
