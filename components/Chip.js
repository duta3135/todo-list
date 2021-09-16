import React, {useState} from 'react'
import styles from '../styles/Chip.module.css'
function Chip(props) {
    const {id, text, isChecked, deleteItem, setItems, items} = props
    // console.log(items)
    const [Checked, setChecked] = useState(isChecked)    
    const chipStyles = Checked ? styles.chipChecked : styles.chipNotChecked
    const isStrikeThru = Checked ? styles.strikeThru : styles.notStrikeThru
    const changeState = id => {
        setChecked(!Checked)
        let idx = items.findIndex(x => x.id === id)
        const tempArr = items
        tempArr[idx].isChecked = !tempArr[idx].isChecked
        console.log(tempArr)
        // setItems()
    }
    return (
        <div  className={chipStyles} onClick={()=>changeState(id)} style={{cursor: "pointer"}}>
            <span className={isStrikeThru}>{text}</span>
            <h4 onClick={()=>deleteItem(id)}>&#215;</h4>
        </div>
    )
}

export default Chip
