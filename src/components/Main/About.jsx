import jinxPortrait from "../../assets/jinx-portrait.png"

function About() {
    return (
      <div className="aboutFullPage">
        <div className="about fade-in">
          <div className="aboutContent">
            <h1 className="aboutTitle">Hi. I'm Jinx.</h1>
            <h2 className="aboutSubtitle">Goblin. Rascal. Witchcraft Extraordinaire.</h2>
            <p className="aboutText">From my working class roots in the suburbs of Epinhoff, I’ve spent a decade training as a Witch and working my way up the arcane hierarchy. This is an archive of my most memorable adventures.</p>
          </div>
          <img className="aboutImage" src={jinxPortrait}/>
        </div>
      </div>
    );
};

export default About;