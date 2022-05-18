const CursoValidator = {
    nome: {
        required: "O campo Nome é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 8,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    duracao: {
        required: "O campo Duração é Obrigatório"
    },
    modalidade: {
        required: "O campo Modalidade é Obrigatório"
    },
}

export default CursoValidator