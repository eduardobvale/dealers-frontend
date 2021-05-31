import PropTypes from 'prop-types'

const dealerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
})

export default dealerShape
