import "./Contents.css"

const orderedChapters = [
  {
    title: "The Pauper's Daughter",
    content: "",
  },
  {
    title: "Smoke and Mirrors",
    content: fetch("../Chapters/1-smoke_and_mirrors.html").text,
  },
  {
    title: "Leprechaun Hunt",
    content: "",
  },
];

function Chapter() {

};

function Contents() {
    return (
        <div className="contents">
          <ul>
            {
              orderedChapters.map((chapter) => (
                <li>
                  <a>{chapter.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
    );
};

export default Contents;