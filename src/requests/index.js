import axios from 'axios'

const url = 'http://localhost:3001/notes'

export const getNotes = () =>
  axios.get(url).then(res => res.data)

export const createNote = newNote =>
  axios.post(url, newNote).then(res => res.data)

export const updateNote = updatedNote =>
  axios.put(`${url}/${updatedNote.id}`, updatedNote).then(res => res.data)