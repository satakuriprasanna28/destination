import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem

  return (
    <li className="destination-item-con">
      <img src={imgUrl} alt={name} className="destination-item-img" />
      <p className="paragraph">{name}</p>
    </li>
  )
}

export default DestinationItem
