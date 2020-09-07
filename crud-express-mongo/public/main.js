// main.js
const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

//update button
update.addEventListener('click', () => {
  fetch('./quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vadar',
      quote: 'I find your lack of faith disturbing.'
    })
  })
  .then(res => {
    if (res.ok) return res.json() //assincrono
  })
  .then(res => console.log(res))
  .then(()=>window.location.reload(true))
})

// delete button
deleteButton.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vadar',
      _id: '5f558e14617c061dd0733a06'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {
    if(data==='No quote to delete')
      messageDiv.textContent = 'No quote to delete'
    else location.reload(true)
  })
})
