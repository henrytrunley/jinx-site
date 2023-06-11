
import { Fragment, useState } from "react";
import { Header, Main } from "./components/index";
import "./App.css";


function App() {
    const [currentPage, setCurrentPage] = useState("contents");
    
    return (
      <Fragment>
        <header>
          <Header setCurrentPage={setCurrentPage}/>
        </header>
        <main>
          <Main currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </main>
      </Fragment>
    );
}

export default App;