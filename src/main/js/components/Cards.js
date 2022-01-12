import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewCard from "./NewCard";
import CardsList from "./CardsList";


function Cards() {
    const [state, setState] = useState([])

    const addItem = (id, title, description, show)=>{
        setState(()=>[
            ...state,
            {id, title, description, show}
        ])
    }

    return (
        <div className="menu_card">
            <section>
                <p><img className="card_pic" src="../picture2.jpeg" alt=""/></p>
            </section>

            <section>
                <p className="name">StudyCards</p>
            </section>

            <section className="down_line"></section>
            <section className="up_line"></section>

            <Link to="/profile">
                <button className="profile_button">Profile</button>
            </Link>

            <section className="cards_list">
                <CardsList state={state} />
            </section>

            <button className="add_card_button" id="add_button">
                Add card...
            </button>

            <section className="add_card_name" id="form">
                <NewCard addItem={addItem}/>
            </section>
        </div>
    )
}

export default Cards;