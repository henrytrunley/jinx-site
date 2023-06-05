import { Fragment, useState } from "react";
import "./Anthology.css"


const orderedChapters = [
    {
        index: 0,
        title: "The Pauper's Daughter",
        content: "",
    },
    {
        index: 1,
        title: "Smoke and Mirrors",
        content: "Test body text for s&m",
    },
    {
        index: 2,
        title: "Leprechaun Hunt",
        content: "",
    },
];


function Chapter({ chapterIndex }) {
    const chapter = orderedChapters[chapterIndex];
    return (
        <Fragment>
          <h1>{chapter.title}</h1>
          <div>{chapter.content}</div>
        </Fragment>
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