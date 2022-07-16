import React from "react";
import './ListItem.css';

const ListItem = ({ item, deleteListItems }) => {

  return(
    <div className='list-item'>
      <div className='list-item-header'>
        <input type={"checkbox"} onClick={() => {deleteListItems(item.id)}}></input>
        <h3>{item.goal}</h3>
      </div>
      <p> {item.description}</p>
      <button onClick={() => deleteListItems(item.id)}>Delete Item</button>
    </div>
  )
}

export default ListItem;