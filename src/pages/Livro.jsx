import Topo from "../../src/components/Topo"
import Rodape from "../../src/components/Rodape"
import {useParams} from "react-router-dom"

const Livro = ({livros}) => {
  const livroSlug = useParams()
  return (
  <>
    <Topo />
      <main className="principal">
        <div className="pag-livro">
        {livros
        .filter( (livro) => livro.slug === livroSlug.slug)
          .map(livro => ( 
            <>
              <h2>{livro.titulo}</h2>
              <div className="livro">
                <img
                  src={"./imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"}
                  alt="Thumbnail da capa do livro ..." />
                <ul>
                  <li key={livro.isbn}>ISBN: {livro.isbn}</li>
                  <li key={livro.ano}>Ano: {livro.ano}</li>
                  <li key={livro.paginas}>Páginas: {livro.paginas}</li>
                  <li key={livro.preco}>Preço: R${livro.preco},00</li>
                </ul>
                <hr />
                <h3>Descrição do livro</h3>
                <p>{livro.descricao}</p>
              </div>
            </>
          ))
        }
</div>
      </main>
    <Rodape />
  </>
)}
export default Livro
