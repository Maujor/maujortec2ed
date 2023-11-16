import Topo from "../../src/components/Topo"
import Rodape from "../../src/components/Rodape"
import { Link } from "react-router-dom"

const Programacao = ({livros}) => {
  return (
    <>
      <Topo />
        <main className="principal">
          <>
            <h2>Categoria Programação</h2>
            {livros
              .filter(livro => livro.categoria === "programacao")
              .map(livro => (
                <div className="card" key={livro.id}>
                  <div className="thumb">
                    <img src={"./imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"}
                      alt="Thumbnail da capa do livro ..." />
                  </div>
                  <div className="detalhes">
                    <h3>{livro.titulo}</h3>
                    <p>{livro.descricao.slice(0,130) + "..."}</p>
                    <p><Link to={"/" + livro.slug}>Leia mais &gt;</Link></p>
                  </div>                
                </div>
              ))
            }
          </>
        </main>      
      <Rodape />
    </>
  )
}

export default Programacao
