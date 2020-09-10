import React, {useState, useEffect} from 'react'
import './quote-item.css'
const QuoteItem = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const toggleEdit  = () => {
        isEditing ? setIsEditing(false) : setIsEditing(true)
    }

    const editQuote = (event, id) => {
      fetch('http://localhost:9000/quotes', {
        method: 'put',
        headers: { 'Accept': 'application/json',
        'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name" : event.target[0].value,
          "quote" : event.target[1].value,
          "_id": id
        }),
      })
      .then(res=>res.json())
      .then(_=>toggleEdit())
      .then(response=>props.getQuotes())
      .catch(e=>console.error(e))
      event.preventDefault()
    }

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
        .catch(e=>console.log(e))
        .then(_=> {props.getQuotes()})
      }

        
      if (isEditing )
        return <div>
            <form onSubmit={(e)=>{editQuote(e, props._id)}}>
              <input className="input-name" defaultValue={props.name}/><br/>
              <input className="input-quote" autoFocus defaultValue={props.quote}/><br/>
              <input className="select-submit" type="submit"/>
              <button className="select-cancel" onClick={toggleEdit}>Cancelar</button>
            </form>
        </div>

      return  <div className="ul-item">
                <li className="item-name">{props.name}</li>
                <li className="item-quote">"{props.quote}"</li>
                <button className="select-delete" onClick={()=>{deleteSelected(props._id)}}>Delete</button>
                <button className="select-edit" onClick={toggleEdit}>Edit</button>
            </div>
      
}

export default QuoteItem;



    
 