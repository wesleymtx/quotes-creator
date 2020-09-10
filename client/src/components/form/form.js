import React from 'react';
import './form.css'
function Form(props){
    return <form onSubmit={props.onSubmit} method="post" className="form-sign-quotes">
            <label>List: </label><br/>
            <input className="input-text" defaultValue="List Name" onChange={props.changeListName} type="text"/><br/>
            <label>Name: </label><br/>
            <input className="input-text" placeholder="Taxi Driver" required type="text"/><br/>
            <label>Quote: </label><br/>
            <textarea className="input-text" placeholder="Are you talking to me." required type="text"/><br/>
            <input className="input-submit" value="Submit" type="submit"/>
            <button type="button" style={{float: 'left'}} onClick={props.deleteQuote} className="input-submit">Delete</button>
        </form>   
}
export default Form;