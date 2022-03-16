// import tampilAlert from "./tampilAlert";
import {
  Container,
  DropdownButton,
  Dropdown,
  Row,
  Col,
  Figure,
  Breadcrumb,
  Carousel,
  ListGroup,
  Alert,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container fluid className="p-0">
        <div style={{ height: "100px", backgroundColor: "black" }}>
          <Row>
            <Col md={10}>
              <DropdownButton id="dropdown-item-button" title="Pilih Bahasa">
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col>
              <Figure>
                <img
                  src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                  alt="Profile"
                  className="ml-5"
                  style={{ height: "50px", width: "50px" }}
                />
                <Figure.Caption>Alan Saputra</Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </div>
        <Row>
          <Col md={8}></Col>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Berita
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <center>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  style={{ height: "300px", widht: "500px" }}
                  className="d-flex w-50"
                  src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h4>Inggris mau jadi tim terbai dunia</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={{ height: "300px", widht: "500px" }}
                  className="d-flex w-50"
                  src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h4>Inggris mau jadi tim terbai dunia kayaknya</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "300px", widht: "500px" }}
                  className="d-flex w-50"
                  src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h4>Sani Rizki Fauzi Tegaskan Agar Pemain Tim</h4>
                  <h3>Indonesia u-23 tetap fokus</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </center>
        </Row>
        <Row className="mt-3">
          <Col>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Liga Satu Indonesia
              </ListGroup.Item>
              <ListGroup.Item as="li">Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item as="li" disabled>
                Divisi Primera
              </ListGroup.Item>
              <ListGroup.Item as="li">Serie A</ListGroup.Item>
              <ListGroup.Item as="li">Ligue 1</ListGroup.Item>
              <ListGroup.Item as="li">Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={5}>
            <Alert variant="secondary">
              <Alert.Heading>
                <h1>DIVISI PRIMERA</h1>
              </Alert.Heading>
              <p>Main untuk catalunya,Gerard Pique Minta Dihormati</p>
              <Button>Read More</Button>
            </Alert>
          </Col>
          <Col md={4}>
            <center>
              <img
                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                alt="Profile Login"
                style={{ height: "50px", width: "50px" }}
              />
              <h4>Silahkan Login</h4>
            </center>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Masukkan Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Terms & Condition" />
              </Form.Group>
              <Button variant="primary" onClick={handleShow}>
                Login
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>Anda Berhasil Login</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
