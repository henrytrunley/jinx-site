
import { Fragment, useState } from "react";
import { Header, Anthology } from "./components/index";
import "./App.css";


function GetPage({ currentPage }) {
    if (currentPage == "home") {
        return Anthology()
    }
    else {
        return (
            <div></div>
        )
    }
}


function App() {
    const [currentPage, setCurrentPage] = useState("home");
    
    return (
      <Fragment>
        <header>
          <Header setCurrentPage={setCurrentPage}/>
        </header>
        <main>
          <GetPage currentPage={currentPage}/>
        </main>
      </Fragment>
    );
}

export default App;