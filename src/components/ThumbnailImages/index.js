import './index.css'

const ThumbnailImages = props => {
  const {eachImage, updateImages} = props
  const {id, imageUrl, thumbnailUrl, category} = eachImage

  const getMatchImages = () => {
    updateImages(id)
  }

  return (
    <li className="list-of-images">
      <button
        type="button"
        onClick={getMatchImages}
        className="button-container"
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-images" />
      </button>
    </li>
  )
}
export default ThumbnailImages
