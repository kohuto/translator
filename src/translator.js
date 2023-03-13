import React, { useState } from "react";
import "./translator.css"; // import the CSS file
import swap from "./images/swap.png";
import mic from "./images/mic.png";
import copy from "./images/copy.png";
import audio from "./images/audio-speaker-on.png";
import close from "./images/close.png";
function Translator(props) {
  const alternativesCount = props.alternatives.length;
  console.log(alternativesCount);
  const [textInput, setTextInput] = useState(props.textInput);
  const [textOutput, setTextOutput] = useState(props.textOutput);
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("fr");

  function handleTextInputChange(event) {
    setTextInput(event.target.value);
  }
  function handleTextOutputChange(event) {
    setTextOutput(event.target.value);
  }

  function handleSourceLangChange(event) {
    setSourceLang(event.target.value);
  }

  function handleTargetLangChange(event) {
    setTargetLang(event.target.value);
  }

  return (
    <div className="translator-container">
      <div className="language-selectors">
        <div className="source-selector language-selector side-column">
          <select value={sourceLang} onChange={handleSourceLangChange}>
            <option value="af">Ostravština</option>
          </select>
        </div>

        <div className="middle-column">
          <div className="swap-container">
            <img src={swap} alt="swap" />
          </div>
        </div>

        <div className="target-selector language-selector side-column">
          <select value={targetLang} onChange={handleTargetLangChange}>
            <option value="af">Čeština</option>
            <option value="sq">Angličtina</option>
          </select>
        </div>
      </div>
      <div className="text-input-container">
        <div className="close-container">
          <img src={close} alt="copy" />
        </div>
        <div className="side-column text-input">
          <textarea
            value={textInput}
            onChange={handleTextInputChange}
            placeholder="Zadejte text"
          ></textarea>
          <div className="icons-input">
            <div>
              <img src={mic} alt="copy" />
            </div>
            <div>
              <img src={audio} alt="copy" />
            </div>
          </div>
        </div>
        <div className="middle-column"></div>
        <div className="side-column text-output">
          <textarea
            value={textOutput}
            onChange={handleTextOutputChange}
            placeholder="Překlad"
          ></textarea>
          <div className="icons-input">
            <div>
              <img src={copy} alt="copy" />
            </div>
            <div>
              <img src={audio} alt="copy" />
            </div>
          </div>
        </div>
      </div>

      {alternativesCount > 0 && (
        <div className="meanings-container">
          <p>Překlady výrazu {props.textInput}</p>
          <p style={{ color: "gray", marginTop: "20px" }}>podstatné jméno</p>
          <hr></hr>
          <Alternatives alternatives={props.alternatives} />
        </div>
      )}
    </div>
  );
}

function Alternatives(props) {
  return (
    <>
      {props.alternatives.map((item, index) => (
        <>
          <div key={index} className="alternative-translate">
            {item}
          </div>
          <hr></hr>
        </>
      ))}
    </>
  );
}

export default Translator;
