import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import DisciplinaService from '../../services/academico/DisciplinaService'
import {BsTrash, BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {AiOutlineRollback} from 'react-icons/ai'
import Swal from 'sweetalert2'



const DisciplinasLista = () => {

    const[disciplinas, setDisciplinas] = useState ([])

    useEffect(()=> {
        setDisciplinas(DisciplinaService.getAll())
    }, [])

    function apagar(id) {
      Swal.fire({
        title: 'Quer deletar a parada?',
        text: "Tu pode se arrepender meu nobre!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero deletar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deletado!',
            'O seu arquivo foi deletado.',
            'success',
            DisciplinaService.delete(id),
            setDisciplinas(DisciplinaService.getAll()),
          )
        }
      })
    }

    console.log(disciplinas);
    
  return (
    <div>
        <Container>
        <h1>Disciplinas</h1>
        <Link className='btn btn-success' to={'/disciplinas'}><AiOutlinePlus/> Novo</Link>
        <Table className="mt-3" striped bordered hover>
         <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Curso</th>
        </tr>
        </thead>
        <tbody>
            {disciplinas.map((item, i) => (
                <tr key={i}>
                <td>
                <Link to={'/disciplinas/' + i}><BsPencil className='text-primary'/></Link>{"  "}
                <BsTrash onClick={() => apagar (i)} className='text-danger'/>
                </td>
                <td>{item.nome}</td>
                <td>{item.curso}</td>
              </tr>
            ))}
        </tbody>
        </Table>
        <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
        </Container>
    </div>
  )
}

export default DisciplinasLista