import React from 'react'
import Nav from 'react-bootstrap/Nav'
import '../index.css'

export default function TopBar() {
  return (
    <div>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="#cv">Mi CV</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#proyectos">Proyectos</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#linkedin">LinkedIn</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
