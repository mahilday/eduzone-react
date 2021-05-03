
import "./App.scss";
import Home from "./pages/Home"
import GeneralContextProvider from './contexts/GeneralContext'

function App() {
  return (
  <div className="App">
    <GeneralContextProvider>
    <Home />
    </GeneralContextProvider>
  </div>
  );
}

export default App;
