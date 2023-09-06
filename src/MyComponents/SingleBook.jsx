import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  selectABook = () => {
    if (this.state.selected === false) {
      this.setState({ selected: true });
      const card = document.getElementById(this.props.HorrorBook.asin);
      console.log(card);
      card.classList.add("borderRed");
    } else {
      this.setState({ selected: false });
      const card = document.getElementById(this.props.HorrorBook.asin);
      console.log(card);
      card.classList.remove("borderRed");
    }
  };

  render() {
    return (
      <Col xs={3} className="mb-5" key={`book-${this.props.HorrorBook.title}`}>
        <Card id={this.props.HorrorBook.asin} style={{ minHeight: "550px" }}>
          <Card.Img
            variant="top"
            src={this.props.HorrorBook.img}
            style={{ width: "objectfit", height: "400px" }}
            onClick={this.selectABook}
          />
          <Card.Body>
            <Card.Title>{this.props.HorrorBook.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
