import React, {useState, useContext} from "react";
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {BookContext} from '../contexts/BookContextProvider'


export default function AddBook(props) {
  const {appendBooks} = useContext(BookContext)
    const [title, settitle] = useState('');
    const [writer, setwriter] = useState('');
    // const [date, setdate] = useState('');
    const [cover,setcover] = useState('');

    const addBook = async (e) => {
        e.preventDefault()

        const book = {
            title: title, 
            writer: writer,
            date: Date.now(),
            cover:cover
          }

           // send new book to backend
    let res = await fetch('/rest/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
      })
      res = await res.json()
      appendBooks(res)
  
      props.history.push('/')
    }


   return (
    <Container className='bak'>  
    <div className="mx-5 px-5">
    <h1>ADD NEW BOOK</h1>
    <Form onSubmit={addBook} className="my-5 p-5">
      <FormGroup className="mt-3 mb-2 mr-sm-2 mb-sm-0">
        <Label for="title" className="mr-sm-2">TITLE</Label>
        <Input type="text" name="TITLE" id="title" placeholder="Title " onChange={e=>settitle(e.target.value)}/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="writer" className="mr-sm-2">WRITER</Label>
        <Input type="text" name="Writer" id="writer" placeholder="Writer"  onChange={e=>setwriter(e.target.value)}/>
      </FormGroup>

      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="cover" className="mr-sm-2">book Picture</Label>
        <Input type="text" name="book Picture" id="cover" placeholder="book Picture"  onChange={e=>setcover(e.target.value)}/>
      </FormGroup>

      <Button>Submit</Button>
      </Form>
    </div>
  </Container>
    )
}
