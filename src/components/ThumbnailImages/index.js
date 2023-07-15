import './index.css'

const ThumbnailImages = props => {
  const {eachImage, updateImages} = props
  const {id, imageUrl, thumbnailUrl, category} = eachImage

  const getMatchImages = () => {
    updateImages(id)
  }

  return (
    <button type="button" onClick={getMatchImages} className="button-container">
      <li className="list-of-images">
        <img src={thumbnailUrl} alt="avtar1" className="thumb-images" />
      </li>
    </button>
  )
}
export default ThumbnailImages
