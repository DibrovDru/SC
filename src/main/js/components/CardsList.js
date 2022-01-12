import React from "react";
import Card from "./Card";

function CardsList({state, deleteItem}) {
    return (
        <div>
            {state.map(elem=><Card key={elem.id} item={elem} deleteItem={deleteItem}/>)}
        </div>
    )
}

export default CardsList;