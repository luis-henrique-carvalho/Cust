
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'

//PAGINAS
import Home from './componentes/pages/Home'
import Contact from './componentes/pages/Contact'
import NewProject from './componentes/pages/NewProject'
import Projects from './componentes/pages/Projects'
import Company from './componentes/pages/Company'
import NavBar from './componentes/layout/NavBar'


//COMPONENTES
import Container from './componentes/layout/Container'
import Footer from './componentes/layout/Footer'





function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass = "min-height">
      <Routes>

        <Route path='/home' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/company' element={<Company />}></Route>
        <Route path='/newproject' element={<NewProject />}></Route>
          
      </Routes>
      </Container>
      <Footer />

    </Router>
  );
}

export default App;
