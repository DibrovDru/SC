import React from "react";
import { Link } from "react-router-dom";

function Folder({item, deleteItem}) {
    let {id, title} = item;

    return (
        <div>
            <Link to="/my_folders/folder">
            <button className="folder" onDoubleClick={()=>deleteItem(id)}>{title}</button>
            </Link>
        </div>
    )
}

export default Folder;