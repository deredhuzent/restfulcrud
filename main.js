const buttonFetchAll = document.getElementById('fetch-all')
const buttonFetchOne = document.getElementById('fetch-one')
const buttonDelete = document.getElementById('delete-one')
const buttonEdit = document.getElementById('edit-one')

const endpoint = 'https://ih-crud-api.herokuapp.com/characters/'

buttonFetchAll.onclick = () => {
  axios
    .get(endpoint)
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => console.log(err))
}

buttonFetchOne.onclick = () => {
  id = document.getElementById('fetch-one-input').value
  axios
    .get(`${endpoint}${id}`)
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err))
}

buttonEdit.onclick = () => {
  id = document.getElementById('edit-one-input').value
  name = document.querySelector('input[name="name"]').value
  occupation = document.querySelector('input[name="occupation"]').value
  debt = document.querySelector('input[name="debt"]').value
  weapon = document.querySelector('input[name="weapon"]').value
  axios
    .patch(`${endpoint}${id}`, { name, occupation, debt, weapon })
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => console.log(err))
}

buttonDelete.onclick = () => {
  id = document.getElementById('delete-one-input').value
  axios
    .delete(`${endpoint}${id}`)
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err))
}
