import { Component } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    bookName: "",
  };
  filterBookList = event => {
    event.preventDefault();
    const serchedBook = document.getElementById("serchBar").value;
    console.log(serchedBook);
    this.setState({ bookName: serchedBook });
    console.log(this.props.HorrorBooks.filter(book => book.title == this.state.bookName));
  };
  render() {
    return (
      <Container>
        <InputGroup className="mb-3">
          <Form onSubmit={this.filterBookList}>
            <Form.Group className="mb-3">
              <Form.Label>Serch a Book</Form.Label>
              <Form.Control type="text" id="serchBar" />
            </Form.Group>
            <Button type="submit">Serch</Button>
          </Form>
        </InputGroup>
        <Row>
          {this.props.HorrorBooks.map((book, i) => (
            // <Col xs={3} className="mb-5" key={`book-${i}`}>
            //   <Card style={{ minHeight: "550px" }}>
            //     <Card.Img variant="top" src={book.img} style={{ height: "400px" }} />
            //     <Card.Body>
            //       <Card.Title>{book.title}</Card.Title>
            //       <Button variant="primary" className="me-3">
            //         Add to Cart
            //       </Button>
            //     </Card.Body>
            //   </Card>
            // </Col>
            <SingleBook HorrorBook={book} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
