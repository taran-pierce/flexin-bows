const ImageCard = (props) => {
  return (
    <div>
      <style jsx>{`
        img {
          max-width: 100%;
        }
      `}</style>
      <img src={props.image} alt={`get it done`} />
    </div>
  )
}

export default ImageCard