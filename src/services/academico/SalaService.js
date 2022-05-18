class SalaService {

    getAll(){
        const salas = localStorage.getItem('salas')
        return salas ? JSON.parse (salas) : []
    }

    get(id){

    }

    create(dados){
        const salas = this.getAll()
        salas.push(dados)
        localStorage.setItem('salas', JSON.stringify(salas))
    }

    update(id,dados){

    }

    delete(id){

    }

}

export default new SalaService()