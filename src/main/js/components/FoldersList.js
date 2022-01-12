import React from "react";
import Folder from "./Folder";

function FoldersList({state, deleteItem}) {
    return (
        <div>
            {state.map(elem=><Folder key={elem.id} item={elem} deleteItem={deleteItem}/>)}
        </div>
    )
}

export default FoldersList;