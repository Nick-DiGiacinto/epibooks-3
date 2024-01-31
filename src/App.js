import "./App.css";
import Greetings from "./components/GreetingsComponent"
import Navbar1 from "./components/NavbarComponent";
import BooksComplete from "./components/BookComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <Navbar1 />
        <Greetings />
      </header>
      <main>
        <>
          <BooksComplete />
        </>
      </main>
    </>
  );
}

export default App;
