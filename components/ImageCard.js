import PropTypes from 'prop-types'

const ImageCard = (props) => {
  return (
    <div>
      <style jsx>{`
        img {
          border: 1px solid rgba(0,0,0,.6);
          max-width: 100%;
        }
      `}</style>
      <img src={props.image} alt={'get it done'} />
    </div>
  )
}

ImageCard.propTypes = {
  image: PropTypes.any.isRequired
}

export default ImageCard