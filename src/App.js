import "./App.css";
import Mywelcome from "../components/MywelcomeComponent";
import MynavComponent from "../components/MynavComponent";
import AllthebookComponent from "../components/AllthebookComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <MynavComponent />
        <Mywelcome />
      </header>
      <main>
        <>
          <AllthebookComponent />
        </>
      </main>
    </>
  );
}

export default App;
