import "./App.scss";
import {useEffect} from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import GeneralContextProvider from "./contexts/GeneralContext";
import HomeContextProvider from "./contexts/HomeContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import {Header,  Footer,} from './components/index';


function App() {
  useEffect(()=>{
    document.getElementById('imgLoader').style.display ="none"
  })
  return (
    <Router>
    <div className="App">
      <GeneralContextProvider>
        <HomeContextProvider>
          <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        </HomeContextProvider>
      </GeneralContextProvider>
    </div>
    </Router>
  );
}

export default App;
