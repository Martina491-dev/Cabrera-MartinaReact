 import "./App.css"
import NavBar from "./componentes/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ItemListContainter from './componentes/ItemDetailContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'


function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
      <Route path = '/' element = {<ItemListContainter/>} />
      <Route path = '/category/:id' element ={<ItemListContainter/>} />
      <Route path = '/item/:id' element= {<ItemDetailContainer/>} />
    <div className="App">
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
    </Routes>
    </Router>
    </>
  )
   

}



export default App 
