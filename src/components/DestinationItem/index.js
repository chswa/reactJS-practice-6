// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationList} = props
  const {image, name} = destinationList

  return (
    <li className="list-container">
      <img className="image" src={image} alt={name} />
      <h1 className="heading">{name}</h1>
    </li>
  )
}

export default DestinationItem
