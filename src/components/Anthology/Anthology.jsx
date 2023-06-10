import { Fragment, useState } from "react";
import "./Anthology.css"

import thePaupersDaughter from "./Chapters/0-the_paupers_daughter.jsx"
import smokeAndMirrors from "./Chapters/1-smoke_and_mirrors.jsx"


const orderedChapters = [
    {
        index: 0,
        title: "The Pauper's Daughter",
        content: thePaupersDaughter,
    },
    {
        index: 1,
        title: "Smoke and Mirrors",
        content: smokeAndMirrors,
    },
    {
        index: 2,
        title: "Witch Hunt",
        content: "Coming Soon!",
    },
];


function Chapter({ chapterIndex }) {
    const chapter = orderedChapters[chapterIndex];
    return (
        <div className="chapter">
          <h1 className="chapterTitle">{chapter.title}</h1>
          <div className="chapterContent">{chapter.content}</div>
        </div>
    );
};


function Contents({ setChapterIndex }) {
    return (
        <div className="contents">
          <ul>
            {orderedChapters.map((chapter) => (
                <li>
                  <a onClick={() => setChapterIndex(chapter.index)}>{chapter.title}</a>
                </li>
            ))}
          </ul>
        </div>
    );
};


function Anthology() {
    const [chapterIndex, setChapterIndex] = useState(-1);

    return (
      <Fragment>
        {chapterIndex==-1 && <Contents setChapterIndex={setChapterIndex}/>}
        {chapterIndex!=-1 && <Chapter chapterIndex={chapterIndex}/>}
      </Fragment>
    );
}

export default Anthology;