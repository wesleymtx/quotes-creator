import React from 'react';
import './form.css'
function Form(props){
    return <form onSubmit={props.onSubmit} method="post" className="form-sign-quotes">
            <label>List: </label><br/>
            <input className="input-text" onChange={props.changeListName} type="text"/><br/>
            <label>Name: </label><br/>
            <input className="input-text" required type="text"/><br/>
            <label>Quote: </label><br/>
            <textarea className="input-text" required type="text"/><br/>
            <input className="input-submit" type="submit"/>
            <button type="button" style={{float: 'left'}} onClick={props.deleteQuote} className="input-submit">Delete</button>
        </form>   
}
export default Form;