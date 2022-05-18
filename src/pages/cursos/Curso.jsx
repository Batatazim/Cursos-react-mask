import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import CursoValidator from '../../validators/CursoValidator'
import CursoService from '../../services/academico/CursoService'

const Curso = () => {

  const {register, handleSubmit, formState: {errors} } = useForm();

  function salvar(dados) {
    CursoService.create(dados)
  }

  return (
    <div>
        <Container>
        <h1>Cursos</h1>
        <Form>
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register("nome", CursoValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="duracao">
           <Form.Label>Duração: </Form.Label>
           <Form.Control type="text"{...register("duracao", CursoValidator.duracao)}  />
           {errors.duracao && <span>{errors.duracao.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="modalidade">
           <Form.Label>Modalidade: </Form.Label>
           <Form.Control type="text"{...register("modalidade", CursoValidator.modalidade)}  />
           {errors.modalidade && <span>{errors.modalidade.message}</span>}
         </Form.Group>

         <div className="text-center">
             <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/> Salvar</Button>
         </div>
        </Form>
        </Container>
    </div>
  )
}

export default Curso