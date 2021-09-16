import React from 'react'
import Chip from '../components/Chip'

function List(props) {
    const {items, deleteItem, setItems} = props;
    // console.log(...items)
    return (
        <div>
        {items.map((data) => 
            <Chip 
                key={items.id} 
                {...data} 
                deleteItem={deleteItem}
                setItems={setItems}
                items={items}
                />)}
            
        </div>
    )
}

export default List
