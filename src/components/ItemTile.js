import React from 'react'

const ItemTile = ({ imageUrl, title, description, price }) => {
  let img = imageUrl.replace(/\s/g, "")
  return (
    <div className='item'>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  )
}

export default ItemTile
