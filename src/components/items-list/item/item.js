import React from 'react';

const Item = ({name, onDeleteHandler, id, onImportantHandler, done, important, onDoneHandler}) => {

    const clazz= important ? "color_item" : "no_color_item"
    const clazz2=done ? "line-through" :"no-line-through"

    return (
        <div className="item">
            <div className={clazz} onClick={()=>onDoneHandler(id)}>
                <span className={clazz2} onClick={()=>onDoneHandler(id)}>{name}</span>

            </div>
            <button onClick={()=>onDeleteHandler(id)}>Delete</button>
            <button onClick={()=>onImportantHandler(id)}>Important</button>
        </div>
    );
};

export default Item;