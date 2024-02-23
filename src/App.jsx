import "./App.css"
import Card from "./componentes/Card"


function App() {
  return (
    <div className="App">
      <h1>Nombre de la pag</h1>
      <div className="container">
        <Card title="Titulo" 
        description="la descripcion"/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );

}

export default App
