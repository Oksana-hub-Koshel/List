import {useState} from "react";
import data from "./../../data/data.json"

const useItem=()=>{
    const [items, setItems]=useState(data)
    const [newValue, setNewValue]=useState('')
    const [trim, setTrim]=useState('')
    const [filter, setFilter]=useState('All')
    let id=100;

    const onFilterHandler=(items, filter)=>{

        switch (filter){
            case "All": {
                return items
            }
            case "Active": {
                return items.filter((item)=> !item.done)
            }
            case "Done": {
                return items.filter((item)=>item.done)
            }
            default:
                return items

        }
    }
    const onFilterChange=(filter)=>{
        setFilter(filter)
    }

    const onSearchHandler=(e)=>{
        setTrim(e.target.value)
    }

    const onAddItemHandler=(e)=>{
        setNewValue(e.target.value)
    }

    const addNewItem = (value) => {
        let newItem = {
            list: value,
            id: id++,
            important: false,
            done: false
        }
        setItems((prev) => [...prev, newItem])
        setNewValue('')
    }

    const onDeleteHandler = (id) => {
        setItems((items) => items.filter((elem) => elem.id !== id))
    }

    const onImportantHandler=(id)=>{
      setItems(
          [...items.map((elem)=> elem.id===id ? {...elem, important: !elem.important} : {...elem})]
      )
    }
    const onDoneHandler=(id)=>{
        setItems(
            [...items.map((elem)=> elem.id===id ? {...elem, done: !elem.done} : {...elem})]
        )
    }


    return{
        addNewItem,
        items,
        onDeleteHandler,
        newValue,
        onAddItemHandler,
        onImportantHandler,
        onDoneHandler,
        onSearchHandler,
        trim,
        onFilterHandler,
        filter,
        onFilterChange

    }

}
export default useItem;