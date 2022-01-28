import ScannerComponent from './Components/Scanner'
import { Card, Container, Row, Col } from 'react-bootstrap'
import './App.css';

function App() {


  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <ScannerComponent />
            <Card.Body>
              <Card.Title>
                <h1>Presenta tu QR en pantalla</h1>
              </Card.Title>
              <Card.Text>
               Cuando se haga el scan se enviara el website escaneado
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    // <div >
    //   Test by GMDTECH

    // </div>
  );
}

export default App;
