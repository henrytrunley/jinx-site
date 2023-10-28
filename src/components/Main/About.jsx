import jinxPortrait from "../../assets/jinx-portrait.png"

function About() {
    return (
      <div className="aboutFullPage">
        <div className="about fade-in">
          <div className="aboutContent">
            <h1 className="aboutTitle">Goblin. Rascal. Witchcraft Extraordinaire.</h1>
            <p className="aboutText">Jinx hails from the land of Hardak, where she enjoys a rich and varied lifestyle. Whether she's robbing Rosefall's infamous vampires or hunting devils in the depths of hell, she's loving every minute of it. Herein lies an account of her most memorable adventures as she works her way up the arcane hierarchy.</p>
          </div>
          <img className="aboutImage" src={jinxPortrait}/>
        </div>
      </div>
    );
};

export default About;