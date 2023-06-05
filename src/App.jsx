
import { Fragment } from "react";
import Header from "./components/NavBar";
import PostList from "./components/PostList";
import "./App.css";

function App() {
    return (
      <Fragment>
        <header>
          {Header()}
        </header>
        <main>
          {PostList()}
        </main>
      </Fragment>
    );
}

export default App;