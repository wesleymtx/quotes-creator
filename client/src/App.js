import React, { useState, useEffect } from 'react';
import './App.css';
import Items from './components/items/items'
import Form from './components/form/form'
require('dotenv').config()
function App() {
  console.log("Componente renderizado ");
  const  [data, setData] = useState([])
  const [listName, setListName] = useState('List Name')

  useEffect(()=>{
    getQuotes()
  }, [])
  useEffect(()=>{
    document.title=listName;
  })
  const changeListName = (e) => {
    setListName(e.target.value)
  }
  const submitQuote = e => {
    e.preventDefault();
    setListName(e.target[0].value)
    fetch(process.env.REACT_APP_API_KEY_QUOTES, {
      method:"post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target[1].value,
        quote: e.target[2].value
      })
    })
    .then(res => getQuotes())
    .catch(e => console.log(e))
  }
  const getQuotes = () => {
    fetch(process.env.REACT_APP_API_KEY)
    .then(res => {
      if (res.ok) return res.json() //assincrono
    })
    .then(res => {
      let dataQuotes = res.reverse()
      console.log('getQuotes ok')
      setData(dataQuotes)
    })
  }
  const deleteQuote = () => {
    fetch(process.env.REACT_APP_API_KEY_QUOTES, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'teste',
        _id: '5f558e14617c061dd0733a06'
      })
    })

    .then(res => {
      if (res.ok) return res.json()
    })
    .then(res => {
      getQuotes()
      console.log(res)
    })
  }
  return (
    <div className="container">
      <h1 className="title"><center>Quotes Creater</center></h1>
      <div className="div-teste">
        <Form onSubmit={submitQuote} changeListName={changeListName} deleteQuote={deleteQuote}/>
        <Items data={data} getQuotes={getQuotes} listName={listName}/>
      </div>
    </div>
  );
}

export default App;
