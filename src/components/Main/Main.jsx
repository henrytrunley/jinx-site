import { Fragment, useState, useEffect } from "react";
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
        <div className="anthology">
          <h1 className="chapterTitle">{chapter.title}</h1>
          <div className="chapterContent">{chapter.content}</div>
        </div>
    );
};


function Contents({ changePageWithBlockingTransition }) {
    const [fadeOtherTitles, setFadeOtherTitles] = useState(false);
    const [moveTitle, setMoveTitle] = useState("");

    function handleClick(chapterName) {
        function startFunc() { setFadeOtherTitles(true); setMoveTitle(chapterName); }
        function endFunc() {}
        changePageWithBlockingTransition(chapterName, startFunc, endFunc, 2100.0);
    };

    return (
        <div className={fadeOtherTitles ? "anthology" : "anthology contents"}>
            {[...chapters].map(([chapterName, chapterContent]) => (
                <h1 onClick={() => handleClick(chapterName)} key={chapterName} className={(fadeOtherTitles && (chapterName!=moveTitle)) ? "fade-out-shrink chapterTitle" : "chapterTitle"}>{chapterContent.title}</h1>
            ))}
        </div>
    );
};


function Main({ currentPage, changePageWithBlockingTransition }) {
    if (currentPage == "contents") {
        return(
          <Fragment>
            <Contents changePageWithBlockingTransition={changePageWithBlockingTransition}/>
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