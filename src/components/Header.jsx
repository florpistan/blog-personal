import React from 'react'
import Foto from '../Assets/img/header.png'
import '../index.css'

export default function Header() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="encabezado">
        <img className="img-fluid" src={Foto} alt="header img flor pistan frontend developer" />
      </div>
    </div>
  )
}
