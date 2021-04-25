import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter> 
    <Navbar />
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
