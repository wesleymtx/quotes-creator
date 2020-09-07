const express = require('express')
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
var cors = require('cors');
const { ObjectId } = require('mongodb');

require('dotenv').config({path: '.env'})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*")
  app.use(cors())
  next()
})

MongoClient.connect(process.env.DB_NAME, { useUnifiedTopology: true })
.then(client => {
  const db = client.db('star--quoteswars')
  const quotesCollection = db.collection('quotes')

  app.post('/quotes', (req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // next();
    quotesCollection.insertOne(req.body)
    .then(result => {
      res.json('ok')
    })
    .catch(error => console.error(error))
  })
  app.get('/', (req, res) => {
    db.collection('quotes').find().toArray()
      .then(results => {
        res.json(results)
      })
  })

  app.get('/hohoho', (req, res) => {
    res.json('ok ok')
  })

  app.put('/quotes', (req, res) => {
    quotesCollection.findOneAndUpdate(
      { name: 'teste' },
      {
        $set: {
          name: req.body.name,
          quote: req.body.quote
        }
      },
      {
        upsert: true
      }
    )
    .then(result => {
      res.json('Sucess')
     })
  
    .catch(error => console.error(error))
  })

  app.delete('/quotes', (req, res) => {
    quotesCollection.findOneAndDelete(
      {},
      {sort: {_id: -1}}
      // {_id: ObjectId(req.body._id)}
    )
    .then(result => {
        if(result.deletedCount === 0)
          return res.json('No quote to delete')
      res.json(`Deleted Darth Vadar's quote`)
    })
    .catch(error => console.error(error))
  })

})
.catch(error => console.error(error))

const port = process.env.PORT || 9000;

app.listen(port, function(){
    console.log('listening on '+port)
})
