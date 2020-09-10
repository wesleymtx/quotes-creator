import React, {useState} from 'react';
import QuoteItem from '../quote-item/quote-item';
import './items.css';

function Items(props){
  return <div className="items-quotes"><h2>{props.listName}</h2>
  {props.data.map(data=><QuoteItem key={data._id} _id={data._id} data={props.data} quote={data.quote} name={data.name} getQuotes={props.getQuotes}/>)}
  </div>
}

export default Items;