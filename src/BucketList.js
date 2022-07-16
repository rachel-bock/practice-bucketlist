import React from "react";
import ListItem from "./ListItem";
import './BucketList.css';

const BucketList = ({ myList, deleteListItems }) => {

  const theList = myList.map( goal => {
    if(!goal.done) {
      return(
        <ListItem
          id={goal.id}
          key={goal.id}
          item={goal}
          deleteListItems = {deleteListItems}
        />
      )
    }
  });

  return (
    <div className='list-container'>
      {theList}
    </div>
  )
}

export default BucketList;