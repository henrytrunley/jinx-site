
import { Fragment } from "react";
import { useState } from "react";
import { Header, PostList } from "./components/index";
import "./App.css";


function GetPage({ currentPage }) {
    if (currentPage == "home") {
        return PostList()
    }
    else {
        return (
            <div></div>
        )
    }
}


function App() {
    const [currentPage, setCurrentPage] = useState("about");
    
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