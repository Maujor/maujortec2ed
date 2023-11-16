const Rodape = () => {

  return (
    <footer className="rodape">
      <p>
        Conteúdos cedidos pela <span style={{color: "blue", textDecoration: "underline", cursor: "pointer"}} onClick={()=>window.open("https://novatec.com.br", "_blank", "noreferrer")}>Editora Novatec</span> &#8212; &copy; Copyright 2024
      </p>
    </footer>
  )
}
export default Rodape
