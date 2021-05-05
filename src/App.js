import "./App.scss";
import {useEffect} from 'react'
import Home from "./pages/Home";
import GeneralContextProvider from "./contexts/GeneralContext";
import HomeContextProvider from "./contexts/HomeContext";


function App() {
  useEffect(()=>{
    document.getElementById('imgLoader').style.display ="none"
  })
  return (
    <div className="App">
      <GeneralContextProvider>
        <HomeContextProvider>
          <Home />
        </HomeContextProvider>
      </GeneralContextProvider>
    </div>
  );
}

export default App;
