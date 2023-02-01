import React, {useState} from 'react';

const Search = ({onSearchHandler, trim, onFilterChange, filter}) => {

    const buttons=[
        {name: "all", label: "All"},
        {name: "active", label: "Active"},
        {name: "done", label: "Done"}
    ]

    return (
        <div>
            <input placeholder="Enter item" onChange={onSearchHandler} value={trim}/>
            {buttons.map((elem)=>{
                const isActive=filter===elem.label
                const clazz=isActive ? "btn-color" : "btn-no-color"
                return(
                    <button className={clazz} onClick={()=> onFilterChange(elem.label)}>{elem.name}</button>
                )
            })}
        </div>
    );
};

export default Search;