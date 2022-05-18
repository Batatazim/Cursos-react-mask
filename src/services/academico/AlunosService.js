class AlunosService {

    getAll(){
        const alunos = localStorage.getItem('alunos')
        return alunos ? JSON.parse (alunos) : []
    }

    get(id){

    }

    create(dados){
        const alunos = this.getAll()
        alunos.push(dados)
        localStorage.setItem('alunos', JSON.stringify(alunos))
    }

    update(id,dados){

    }

    delete(id){

    }

}

export default new AlunosService()