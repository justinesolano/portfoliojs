import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'


const App = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Contact />
    </BrowserRouter>
  )
}

export default App