import React, { useState, useEffect } from 'react';
import './App.css';
import Items from './components/items/items'
import Form from './components/form/form'
function App() {
  const  [data, setData] = useState([])

  useEffect(()=>{
    getQuotes()
  }, [])
  const submitQuote = e => {
    e.preventDefault();
    fetch('http://localhost:9000/quotes', {
      method:"post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target[0].value,
        quote: e.target[1].value
      })
    })
    .then(res => getQuotes())
    .catch(e => console.log(e))
  }
  const getQuotes = () => {
    fetch('http://localhost:9000/')
    .then(res => {
      if (res.ok) return res.json() //assincrono
    })
    .then(res => {
      let dataQuotes = res.reverse()
      setData(dataQuotes)
    })
  }
  
  return (
    <div className="container">
      <h1 className="title">teste</h1>
      <Form onSubmit={submitQuote}/>
      <Items data={data}/>
    </div>
  );
}

export default App;
