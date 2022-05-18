import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import salaValidator from '../../validators/salaValidator'
import SalaService from '../../services/academico/SalaService'

const Sala = () => {

    const {register, handleSubmit, formState: {errors} } = useForm();

  function salvar(dados) {
    SalaService.create(dados)
  }

  return (
    <div>
        <Container>
        <h1>Salas</h1>
        <Form>
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register("nome", salaValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="capacidade">
           <Form.Label>Capacidade: </Form.Label>
           <Form.Control type="text"{...register("capacidade", salaValidator.capacidade)}  />
           {errors.capacidade && <span>{errors.capacidade.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="tipo">
           <Form.Label>Tipo: </Form.Label>
           <Form.Control type="text"{...register("tipo", salaValidator.tipo)}  />
           {errors.tipo && <span>{errors.tipo.message}</span>}
         </Form.Group>

         <div className="text-center">
             <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/> Salvar</Button>
         </div>
        </Form>
        </Container>
    </div>
  )
}

export default Sala