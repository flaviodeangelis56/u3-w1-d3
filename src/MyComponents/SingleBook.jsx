import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  //   selectABook = () => {
  //     if (this.state === false) {
  //       this.setState({ selected: true });
  //       if (this.state === true) {
  //         const card = document.getElementsByClassName("card");
  //         console.log(card);
  //         card.classList.add("borderRed");
  //       }
  //     }
  //   };

  render() {
    return (
      <Col xs={3} className="mb-5" key={`book-${this.props.HorrorBook.title}`}>
        <Card className="card" style={{ minHeight: "550px" }}>
          <Card.Img
            variant="top"
            src={this.props.HorrorBook.img}
            style={{ width: "objectfit", height: "400px" }}
            onClick={this.selectABook}
          />
          <Card.Body>
            <Card.Title>{this.props.HorrorBook.title}</Card.Title>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
