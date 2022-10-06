import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from '../folders/00016React/rutas/About'
import Contacto from '../folders/00016React/rutas/Contacto'
import Digimon from '../folders/00016React/rutas/Digimon'
import DigimonList from '../folders/00016React/rutas/DigimonList'
import Home from '../folders/00016React/rutas/Home'
import Navbar from "../folders/00016React/rutas/Navbar"

const App = () => {
    return(
        <div>
            <h1>Rutas</h1>
            <hr />
            
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about' exact component={About}/>
                        <Route path='/contacto' exact component={Contacto}/>
                        <Route path='/digimon' exact component={DigimonList} />
                        <Route path='/digimon/name/:name' component={Digimon} />
                    </Switch>
                </div>
            </BrowserRouter>
            
        </div>
    )
}

export default App