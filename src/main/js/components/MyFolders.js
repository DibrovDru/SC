import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewFolder from "./NewFolder";
import FoldersList from "./FoldersList";


function MyFolders() {
    const [state, setState] = useState([])

    const addItem = (id, title)=>{
        setState(()=>[
            ...state,
            {id, title}
        ])
    }

    const deleteItem = (id)=>{
        setState(()=>state.filter(elem=>elem.id !== id))
    }

    return (
        <div className="menu">
            <section>
                <p><img className="menu_pic" src="../picture2.jpeg" alt=""/></p>
            </section>

            <section>
                <p className="name">StudyCards</p>
            </section>

            <section className="down_line"></section>
            <section className="up_line"></section>

            <Link to="/profile">
                <button className="profile_button">Profile</button>
            </Link>

            <section className="folders_list">
                <FoldersList state={state} deleteItem={deleteItem}/>
            </section>

            <button className="add_folder_button" id="add_button">
                Add folder...
            </button>

            <section className="add_fold_name" id="form">
                <NewFolder addItem={addItem}/>
            </section>
        </div>
    )
}

export default MyFolders;