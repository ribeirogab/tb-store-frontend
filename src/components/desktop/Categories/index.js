import React from 'react'

import { FaTshirt, FaCoffee, FaGripHorizontal, FaBell } from 'react-icons/fa'

import { Container } from './styles'

export default function Categories () {
  return (
    <Container>
      <div>
        <FaTshirt className="icon"/>
        <span>CAMISETAS</span>
      </div>
      <div>
        <FaCoffee className="icon"/>
        <span>CANECAS</span>
      </div>
      <div>
        <FaGripHorizontal className="icon"/>
        <span>OUTROS</span>
      </div>
      <div>
        <FaBell className="icon"/>
        <span>NOVIDADES</span>
      </div>
    </Container>
  )
}
