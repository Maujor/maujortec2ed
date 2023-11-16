import "./assets/css/estilos.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Frontend from "./pages/Frontend"
import Programacao from "./pages/Programacao"
import Design from "./pages/Design"
import Catalogo from "./pages/Catalogo"
import Livro from "./pages/Livro"
import NotFound from "./pages/NotFound"
import axios from "axios"
import { useEffect, useState } from "react"


function App() {
  const [livros, setLivros] = useState( [] )
    useEffect( () => {  getLivros()  }, [] )
    const getLivros = async () => { 
      await axios.get("/api/todosOsLivros.json")
      .then((response) => {
        console.log(response.data)
        setLivros(response.data)
      }).catch((err) => {
        if (err.response) { console.log(err.message) } else { console.log("Erro: Tente mais tarde!")
        }
      })  
    }
    
  return (
    <Routes>
      <Route path="/" element={ <Home livros = {livros} /> } />
      <Route path="frontend" element= { <Frontend livros = {livros} /> } />
      <Route path="programacao" element={ <Programacao livros = {livros} /> } />
      <Route path="design" element={ <Design livros = {livros} /> } />
      <Route path="catalogo" element={ <Catalogo livros = {livros} /> } />
      <Route path=":slug" element={ <Livro livros = {livros} /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}
export default App
