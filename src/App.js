import Search from "./components/search/search";
import ItemsList from "./components/items-list/items-list";
import AddItem from "./components/add-item/add-item";
import useItem from "./hooks/useItem/useItem";
import {useState} from "react";


function App() {
    const {items, addNewItem, onDeleteHandler, newValue,onAddItemHandler, onImportantHandler, onDoneHandler, onSearchHandler,
    trim, onFilterHandler, filter, onFilterChange}=useItem()


    const searchFilter=(items,trim )=>{
      return items.filter((item)=>{
          if(trim ===''){
              return item
          }
          else if(item.list.toLowerCase().includes(trim.toLowerCase())){
              return item
          }
      })

}
const searchItems=onFilterHandler(searchFilter(items, trim), filter)

  return (
    <div className="App">
      <h1>Todo List</h1>
        <Search onSearchHandler={onSearchHandler} trim={trim} onFilterChange={onFilterChange} filter={filter}/>
        <ItemsList items={searchItems} onDeleteHandler={onDeleteHandler} onImportantHandler={onImportantHandler}
                onDoneHandler={onDoneHandler}/>

        <AddItem  addNewItem={addNewItem} newValue={newValue} onAddItemHandler={onAddItemHandler}  />
    </div>
  );
}

export default App;
