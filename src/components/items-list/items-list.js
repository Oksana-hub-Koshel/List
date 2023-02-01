import React from 'react';
import Item from "./item/item";

const ItemsList = ({ onDeleteHandler, onImportantHandler, onDoneHandler, items}) => {
    console.log(items)

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
        {items.map((elem)=> {

            return(
                <Item name={elem.list} onDeleteHandler={onDeleteHandler} id={elem.id} onImportantHandler={onImportantHandler}
                      important={elem.important}
                      done={elem.done} onDoneHandler={onDoneHandler}/>
            )


        })}
            </div>
    );
};

export default ItemsList;