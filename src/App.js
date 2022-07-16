import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import InputForm from './InputForm';
import BucketList from './BucketList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      bucketList: [
        {id: 1, goal: "Travel to Europe", description: 'Visit all WW2 battlegrounds.', done: false}, 
        {id: 2, goal: "Watch boys turn 18 years old", description: 'Celebrate "raising" sons through their childhoods.', done: false}, 
        {id: 3, goal: "Be there when Daniel gets married", description: 'Celebrate Daniel finding an eternal companion.', done: false}, 
        {id: 4, goal: "Be there when William gets married", description: 'Celebrate William finding an eternal companion.', done: false}, 
      ]
    }
  }

  markListItemComplete = id => {
    let originalItems = this.state.bucketList.filter(item => id !== item.id);
    let updatedItem = this.state.bucketList.find(item => id === item.id);
    updatedItem.done = true;
    this.setState({bucketList: [...originalItems, updatedItem]});
  }

  addListItems = newItem => {
    console.log(this.state.bucketList, "<<< before add update");
    this.setState({bucketList: [...this.state.bucketList, newItem]});
    console.log(this.state.bucketList, "<<< after add update");
  }

  deleteListItems(itemId) {
    console.log(this.state, '<<< Before delete item');
    let updatedList = this.state.bucketList.filter( listItem => listItem.id !== itemId);
    this.setState({bucketList: updatedList});
    console.log(this.state, '<<< Before delete item');
  }

  render() {
    return (
      <main className="App">
        <NavigationBar />
        <InputForm addListItems={this.addListItems}/>
        {!this.state.bucketList.length && <h2>No Bucket List Items -- Add Some!!</h2>}
        {!this.state.bucketList.reduce((acc, curr) => {
          if(!curr.done) {
            acc += 1;
          }
          return acc;
        }, 0) && <h2>All Bucket List Items Complete -- Add more!</h2>}
        <BucketList myList={this.state.bucketList} deleteListItems={this.deleteListItems} markComplete={this.markListItemComplete}/>
      </main>
    )
  }  
}

export default App;