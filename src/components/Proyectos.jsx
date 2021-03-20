import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Logo from '../Assets/img/logo-navbar.png'

export default function Proyectos() {
  return (
    <div className="container mt-2 mb-2" id="proyectos">
      <h3 className="text-center">Proyectos</h3>
      <div className="row m-0 p-0">
        <div className="column d-flex align-self-center ">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" 
              src={Logo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className="m-1" variant="info">GitHub</Button>
                <Button className="m-1" variant="secondary">Sitio Web</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
