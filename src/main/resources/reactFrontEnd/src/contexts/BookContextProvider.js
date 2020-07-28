import React, { createContext, useState, useEffect } from 'react'
export const BookContext = createContext()

export default function BookContextProvider(props) {
  const [allBooks, setAllBooks] = useState([])

  const appendBooks = (book) => {
    setAllBooks([...allBooks, book])
  }

  const fetchBooks = async () => {
    let res = await fetch('/rest/books')
    res = await res.json()
    setAllBooks(res)    
  }
  
  function deleteBook(id) {
    setAllBooks(allBooks.filter(r => r.id !== id))
    fetch('/rest/books/' + id, {
      method: 'DELETE'
    })
  }

  useEffect(() => {
    fetchBooks()
  }, [])
  
  const values = {
    allBooks,
    deleteBook, 
    appendBooks
  }

  return (
    <BookContext.Provider value={values}>
      {props.children}
    </BookContext.Provider>
  )
}