import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import {AiOutlineRollback} from 'react-icons/ai'
import disciplinaValidator from '../../validators/disciplinaValidator'
import DisciplinaService from '../../services/academico/DisciplinaService'
import { useEffect } from 'react'


const Disciplinas = () => {

  const params = useParams()
  const navigate = useNavigate()
  const {register, handleSubmit, setValue, formState: {errors} } = useForm();

  useEffect(()=>{
    if (params.id){
  const disciplina = DisciplinaService.get(params.id)
  console.log(disciplina);

  for(let campo in disciplina){
    setValue(campo, disciplina[campo])
  }
 }
}, [])

  function salvar(dados) {
    if(params.id){
      DisciplinaService.update(params.id, dados)
    }
    else{
    DisciplinaService.create(dados)
    navigate('/disciplinas')
    }
  }

  return (
    <div>
        <Container>
        <h1>Disciplinas</h1>
        <Form>
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register("nome", disciplinaValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>
         <Form.Group className="mb-3" controlId="curso">
           <Form.Label>Curso: </Form.Label>
           <Form.Control type="text"{...register("curso", disciplinaValidator.curso)}  />
           {errors.curso && <span style={{color: "red"}}>Campo Obrigatorio</span>}
         </Form.Group>
         <div className="text-center">
             <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/> Salvar</Button>{" "}
             <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
         </div>
        </Form>
        </Container>
    </div>
  )
}

export default Disciplinas