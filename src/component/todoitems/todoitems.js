import React from "react";
import  './todoitems.css';


const todolist = (props) => {
    const {items ,deleteItems} = props;
    const length = items.length;
console.log(length)
    const itemlist = length ? (
         items.map( item => {
        return (
            <div key={item.id}>
                 <span className="name">{item.name}</span>
                 <span className="age">{item.age}</span>
                 <span className="action icon" onClick={() => deleteItems(item.id)}>&times;</span>
              </div>
        )
    })) : (
        <p>There is no item to show</p>
    )
    return (
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {itemlist}
        </div>
    )
}

export default todolist;