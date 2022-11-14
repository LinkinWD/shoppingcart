import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
//components
import { Navbar } from "./components/Navbar"

//pages
import { Home } from "./pages/Home"
import { Shop } from "./pages/Shop"
import { About } from "./pages/About"
import { Footer } from "./components/Footer"


function App() {
  
  return (
    <>
    <Navbar/>
    <Container className="mb-4">

<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/about" element={<About/>}/>

</Routes>

    </Container>
    <Footer/>
    </>
  )
}

export default App
