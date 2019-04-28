import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

const iconStyle = {
  float: 'right',
}

const Icon = ( props ) => {
  return (
    <span className='close' onClick={props.clickEvent} style={iconStyle}>
      <style jsx>{`
        span {
          margin-left: .5rem;
          margin-right: .5rem;
        }
      `}</style>
      <FontAwesome
        name={props.name}
        size={props.size}
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        tag='i'
      />
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.any.isRequired,
  clickEvent: PropTypes.any.isRequired,
  size: PropTypes.any.isRequired,
}

export default Icon