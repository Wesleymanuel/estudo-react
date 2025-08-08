function Neymar(){
    let pessoas = [
        {
            nome: "breno",
            profissao: "pedreiro"
        },
           {
            nome: "amanda",
            profissao: "pedreiro"
        },
           {
            nome: "ana",
            profissao: "solteira"
        }
    ]

    const prof = pessoas.filter(person => {
        person.profissao === "pedreiro"
    }) 


    const fim = prof.map(zz => {
        <li>{zz.nome}</li>
    })

    return fim

}
export default Neymar;