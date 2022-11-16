import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header/header";
import Main from "./components/Main/Main";


function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
     </div>
    
  );
}
export default App;
