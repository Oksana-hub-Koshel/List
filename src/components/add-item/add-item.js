
const AddItem = ({addNewItem, newValue, onAddItemHandler}) => {

    return (
        <div style={{display:"flex", alignItems:"center", gap:10, justifyContent:"center", marginTop:20, marginBottom:40}}>
            <input placeholder="Add new item" value={newValue} onChange={onAddItemHandler}/>
            <button onClick={()=>addNewItem(newValue)}>Add</button>
        </div>
    );
};

export default AddItem;