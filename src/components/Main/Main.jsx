import { Fragment, useState } from "react";
import "./Main.css"

import thePaupersDaughter from "./Chapters/0-the_paupers_daughter.jsx"
import smokeAndMirrors from "./Chapters/1-smoke_and_mirrors.jsx"


const chapters = new Map();
chapters.set("the_paupers_daughter", {"title": "The Pauper's Daughter", "content": thePaupersDaughter});
chapters.set("smoke_and_mirrors", {"title": "Smoke and Mirrors", "content": smokeAndMirrors});
chapters.set("witch_hunt", {"title": "Witch Hunt", "content": "Coming soon!"});


function Chapter({ currentPage }) {
    const chapter = chapters.get(currentPage);
    return (
        <div className="chapter">
          <h1 className="chapterTitle">{chapter.title}</h1>
          <div className="chapterContent">{chapter.content}</div>
        </div>
    );
};


function Contents({ setCurrentPage }) {
    for (const [key, value] of chapters) {
        console.log(key)
        console.log(value.title)
    }
    return (
        <div className="contents">
          <ul>
            {[...chapters].map(([chapterName, chapterContent]) => (
                <li>
                  <a onClick={() => setCurrentPage(chapterName)}>{chapterContent.title}</a>
                </li>
            ))}
          </ul>
        </div>
    );
};


function Main({ currentPage, setCurrentPage }) {
    if (currentPage == "contents") {
        console.log("NAVIGATING TO CONTENTS")
        return(
          <Fragment>
            <Contents setCurrentPage={setCurrentPage}/>
          </Fragment>
        );
    }
    else if (chapters.has(currentPage)) {
        return (
          <Fragment>
            <Chapter currentPage={currentPage}/>
          </Fragment>
        )
    }
    else if (currentPage == "about") {
        return (
          <div></div>
        );
    }
    else {
        return (
            <div></div>
        );
    };
};

export default Main;