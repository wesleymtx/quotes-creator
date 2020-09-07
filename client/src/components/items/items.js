import React from 'react'
import './items.css'

function Items(props){
        const deleteSelected = (paramId) => {
          fetch('http://localhost:9000/selectedQuote', {
            method: 'delete',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: 'eere',
              _id: paramId,
            })
          })
          .then(res=>res.json())
          .then(res=>console.log(res))
          .catch(e=>console.log(e))
          .then(_=> {props.getQuotes()})
        }

return <div className="items-quotes"><h2>{props.listName}</h2>
        {props.data.map(data=><div className="ul-item" key={data._id}><li className="item-name">{data.name}</li><li className="item-quote">"{data.quote}"</li>
        <button onClick={()=>{deleteSelected(data._id)}}>delete</button></div>)}
        </div>
    
}

export default Items;