import React from 'react';
import './form.css'
function Form(props){
    return <form onSubmit={props.onSubmit} method="post" className="form-sign-quotes">
            <label>Name: </label><br/>
            <input className="input-text" type="text"/><br/>
            <label>Quote: </label><br/>
            <textarea className="input-text" type="text"/><br/>
            <input className="input-submit" type="submit"/>
        </form>   
}
export default Form;