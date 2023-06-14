
import { Fragment, useState } from "react";
import { Header, Main } from "./components/index";
import "./App.css";


function App() {
    const [currentPage, setCurrentPage] = useState("contents");
    const [pageChangeable, setPageChangeable] = useState(true)
    const [fadeOut, setFadeOut] = useState(false);

    function changePageWithBlockingTransition(newPage, startFunc, endFunc, delay) {
        if ((newPage!=currentPage) && (pageChangeable)) {
            setPageChangeable(false)
            startFunc();
            setTimeout(() => {
                setCurrentPage(newPage);
                endFunc();
                setPageChangeable(true);
            }, delay)
        };
    };

    function fadeTo(page) {
        function startFunc() { setFadeOut(true); }
        function endFunc() { setFadeOut(false); }
        changePageWithBlockingTransition(page, startFunc, endFunc, 1100.0);
    };

    return (
      <Fragment>
        <header>
          <Header fadeTo={fadeTo}/>
        </header>
        <main className={fadeOut ? "fade-out" : ""}>
          <Main currentPage={currentPage} changePageWithBlockingTransition={changePageWithBlockingTransition}/>
        </main>
      </Fragment>
    );
}

export default App;