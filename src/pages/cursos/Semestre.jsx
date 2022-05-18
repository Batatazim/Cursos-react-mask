import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import semestreValidator from '../../validators/semestreValidator'
import SemestreService from '../../services/academico/SemestreService'


const Semestre = () => {

    const {register, handleSubmit, formState: {errors} } = useForm();

    function salvar(dados) {
      SemestreService.create(dados)
    }

  return (
    <div>
         <Container>
        <h1>Salas</h1>
        <Form>
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register("nome", semestreValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="datain">
           <Form.Label>Início do semestre: </Form.Label>
           <Form.Control type="date"{...register("datain", semestreValidator.datain)}  />
           {errors.datain && <span>{errors.datain.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="datafim">
           <Form.Label>Término do semestre: </Form.Label>
           <Form.Control type="date"{...register("datafim", semestreValidator.datafim)}  />
           {errors.datafim && <span>{errors.datafim.message}</span>}
         </Form.Group>

         <div className="text-center">
             <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/> Salvar</Button>
         </div>
        </Form>
        </Container>
    </div>
  )
}

export default Semestre