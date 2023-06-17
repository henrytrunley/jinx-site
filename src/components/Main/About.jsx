import jinxPortrait from "../../assets/jinx-portrait.png"

function About() {
    return (
        <div className="about fade-in">
          <h1 className="aboutTitle">Hi. I'm Jinx.</h1>
          <h2 className="aboutSubtitle">Goblin. Rascal. Witchcraft Extraordinaire.</h2>
          <div className="aboutContent">
            <img src={jinxPortrait}/>
          </div>
        </div>
    );
};

export default About;