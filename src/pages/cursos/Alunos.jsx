import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import alunosValidator from '../../validators/alunosValidator'
import AlunosService from '../../services/academico/AlunosService'

const Alunos = () => {

  const {register, handleSubmit, formState: {errors} } = useForm();

  function salvar(dados) {
    AlunosService.create(dados)
  }

  return (
    <div>
      <Container>
        <h1>Alunos</h1>
        <Form>

         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register("nome", alunosValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="cpf">
           <Form.Label>CPF: </Form.Label>
           <Form.Control type="text"{...register("cpf", alunosValidator.cpf)}  />
           {errors.cpf && <span>{errors.cpf.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="matricula">
           <Form.Label>Matricula: </Form.Label>
           <Form.Control type="text"{...register("matricula", alunosValidator.matricula)}  />
           {errors.matricula && <span>{errors.matricula.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="email">
           <Form.Label>E-mail: </Form.Label>
           <Form.Control type="text"{...register("email", alunosValidator.email)}  />
           {errors.email && <span>{errors.email.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control type="text"{...register("telefone", alunosValidator.telefone)}  />
           {errors.telefone && <span>{errors.telefone.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="cep">
           <Form.Label>CEP: </Form.Label>
           <Form.Control type="text"{...register("cep", alunosValidator.cep)}  />
           {errors.cep && <span>{errors.cep.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="numero">
           <Form.Label>Número: </Form.Label>
           <Form.Control type="text"{...register("numero", alunosValidator.numero)}  />
           {errors.numero && <span>{errors.numero.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="bairro">
           <Form.Label>Bairro: </Form.Label>
           <Form.Control type="text"{...register("bairro", alunosValidator.bairro)}  />
           {errors.bairro && <span>{errors.bairro.message}</span>}
         </Form.Group>

         <div className="text-center">
             <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/> Salvar</Button>
         </div>
        </Form>
        </Container>
    </div>
  )
}

export default Alunos