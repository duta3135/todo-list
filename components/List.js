import React from 'react'
import Chip from '../components/Chip'

function List(props) {
    const {items, deleteItem} = props;
    console.log(...items)
    return (
        <div>
        {items.map((data) => <Chip key={items.id} {...data} deleteItem={deleteItem}/>)}
            
        </div>
    )
}

export default List
