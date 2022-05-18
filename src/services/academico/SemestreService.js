class SemestreService {

    getAll(){
        const semestres = localStorage.getItem('semestres')
        return semestres ? JSON.parse (semestres) : []
    }

    get(id){

    }

    create(dados){
        const semestres = this.getAll()
        semestres.push(dados)
        localStorage.setItem('semestres', JSON.stringify(semestres))
    }

    update(id,dados){

    }

    delete(id){

    }

}

export default new SemestreService()