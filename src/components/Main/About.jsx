import jinxPortrait from "../../assets/jinx-portrait.png"

function About() {
    return (
        <div className="about fade-in">
          <div className="aboutContent">
            <h1 className="aboutTitle">Hi. I'm Jinx.</h1>
            <h2 className="aboutSubtitle">Goblin. Rascal. Witchcraft Extraordinaire.</h2>    
          </div>
          <img className="aboutImage" src={jinxPortrait}/>
        </div>
    );
};

export default About;