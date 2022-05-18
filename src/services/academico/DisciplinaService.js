class DisciplinaService {

    getAll(){
        const disciplinas = localStorage.getItem('disciplinas')
        return disciplinas ? JSON.parse (disciplinas) : []
    }

    get(id){
        const disciplinas = this.getAll()
        return disciplinas[id]
    }

    create(dados){
        const disciplinas = this.getAll()
        disciplinas.push(dados)
        localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    }

    update(id,dados){
        const disciplinas = this.getAll()
        disciplinas.splice(id, 1, dados)
        localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    }

    delete(id){
        const disciplinas = this.getAll()
        disciplinas.splice(id, 1)
        localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    }

}

export default new DisciplinaService()