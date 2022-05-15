import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    Languages: [
      { id: 1, value: "Javascript", xp: 1.8 },
      { id: 2, value: "Css", xp: 2 },
      { id: 3, value: "Php", xp: 0.7 },
      { id: 4, value: "Python", xp: 0.4 },
    ],

    Frameworks: [
      { id: 1, value: "React", xp: 1.8 },
      { id: 2, value: "Vue", xp: 2 },
      { id: 3, value: "Sass", xp: 0.7 },
      { id: 4, value: "Bootstrap", xp: 0.4 },
    ],
  };
  render() {
    let { Languages, Frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={Languages}
          className="languagesDisplay"
          titles="languages"
        />
        <ProgressBar
          languages={Frameworks}
          titles="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
