import React from 'react'
import './items.css'
function Items(props){
return <div className="items-quotes"><h2>{props.listName}</h2>
        {props.data.map(data=><div className="ul-item" key={data._id}><li className="item-name">{data.name}</li><li className="item-quote">"{data.quote}"</li></div>)}
        </div>
    
}

export default Items;