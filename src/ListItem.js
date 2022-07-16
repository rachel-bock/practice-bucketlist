import React from "react";
import './ListItem.css';

const ListItem = ({ item, deleteListItems, markComplete }) => {

  return(
    <div className='list-item'>
      <div className='list-item-header'>
        <input type={"checkbox"} onClick={() => {markComplete(item.id)}}></input>
        <h3>{item.goal}</h3>
      </div>
      <p> {item.description}</p>
      <button onClick={() => deleteListItems(item.id)}>Delete Item</button>
    </div>
  )
}

export default ListItem;