import React, { useEffect, useState,useContext  } from "react";
import { useParams,withRouter } from "react-router-dom";
import { Card, Button,CardImg,
   CardText, Row, Col } from 'reactstrap';
import {BookContext} from '../contexts/BookContextProvider'
import moment from 'moment';


function ShowBook(props) {
  const { deleteBook } = useContext(BookContext)
  let { id } = useParams();
  const [book, setBook] = useState("");

  const getBook = async (id) => {
    let res = await fetch("/rest/books/" + id);
    res = await res.json();
    setBook(res);
  };

  function removeBook() {
    deleteBook(id)
    props.history.push('/')
  }

  useEffect(() => {
    getBook(id);
  },
  []);

  return (
    <div className='bak1'>
        <br></br>
     <Row>
     <Col sm="10" md={{ size: 4, offset: 1 }} >
        <Card body>
        <CardImg className="imgeC" top width="100%" src={book.cover} alt="k" style={{height:'14rem'}} />
          <CardText><h1>{book.title}</h1></CardText>
          <CardText><h3>{book.writer}</h3></CardText>
          <CardText>{moment(book.date).format('llll')}</CardText>
          <Col  sm={{ size: 'auto', offset: 8 }}>   
               <Button onClick={() => removeBook()} color="danger"outline>
                DELETE
               </Button>
          </Col>
        </Card>
      </Col>
      <Col sm="10" md={{ size: 5, offset: 1 }}><h2>Review</h2><h1>{book.title}</h1>{book.reviews}</Col>
      </Row>
     

    </div>
    )
}

export default withRouter(ShowBook)
