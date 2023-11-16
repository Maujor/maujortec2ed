import {Link, NavLink} from "react-router-dom"

const Navegacao = () => {
  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/frontend">Frontend</NavLink></li>
      <li><NavLink to="/programacao">ProgramaçãoX</NavLink></li>
      <li><NavLink to="/design">Design</NavLink></li>
      <li><NavLink to="/catalogo">Catálogo</NavLink></li>
    </ul>
  )
}

export default Navegacao

