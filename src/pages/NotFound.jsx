import Topo from "../../src/components/Topo"
import Rodape from "../../src/components/Rodape"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <Topo />
        <main className="principal">
          <h2>404!</h2>
          <p>
            Página não encontrada ou removida. <Link to="/">Ir para Home Page</Link>
          </p>
        </main>      
      <Rodape />
    </>
  )
}

export default NotFound
