import React , {Component} from 'react';
import './App.css';
import Todolist from './component/todoitems/todoitems';
import Additem from './component/additem/additems';

class App extends Component {
    // list items 
state = {
  items : [
    {id:1 , name : 'mina' ,age : 25},
    {id:2 , name : 'tina' ,age : 24},
    
  ]
}

deleteItems = (id) => {
  // let items = this.state.items;
  // let i = items.findIndex( item => item.id === id)
  // items.splice(i ,1);
  let items = this.state.items.filter(item => { return item.id !== id })
  this.setState({items})
  //  or use filter ==>  let items = this.state.items.filter(item => { return item.id !== id }) then setstate
}

addItem = (item) => {
  console.log(item)
  item.id = Math.random();
  let items = this.state.items
  console.log(items)

  items.push(item)
  this.setState({items})
}

  render() {
  return (
    <div className="App container">
     <h1 className='text-center'> Todo List Apps</h1>
      <Todolist items={this.state.items} deleteItems={this.deleteItems} />
      <Additem addItem={this.addItem} />
    </div>
  );
  }
}

export default App;
