import React from 'react'
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div>

<Navbar bg="secondary" variant="dark" className='mb-4'>
    <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Link className="nav-link" to="/cursos">Cursos</Link>
      <Link className="nav-link" to="/disciplinas">Disciplinas</Link>
      <Link className="nav-link" to="/alunos">Alunos</Link>
      <Link className="nav-link" to="/professores">Professores</Link>
      <Link className="nav-link" to="/sala">Salas</Link>
      <Link className="nav-link" to="/semestre">Semestre</Link>
      <Link className="nav-link" to="/disciplinaslista">Disciplina lista</Link>
    </Nav>
    </Container>
  </Navbar>

    </div>
  )
}

export default Menu