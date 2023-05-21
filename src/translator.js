import React, { useState, useEffect } from "react";
import "./translator.css"; // import the CSS file
import swap from "./images/swap.png";
import mic from "./images/mic.png";
import copy from "./images/copy.png";
import copied from "./images/checked.png";
import audio from "./images/audio-speaker-on.png";
import close from "./images/close.png";
import { data } from "./data"; // import the data array

function Translator() {
  const [alternatives, setAlternatives] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState("");
  const [srcLang, setSrcLang] = useState("cz");
  const [targetLang, setTargetLang] = useState("os");
  const [copyDone, setCopyDone] = useState(false);

  /* translation */
  useEffect(() => {
    setCopyDone(false);
    const selectedItem = data.find((item) => item[srcLang].includes(textInput));
    if (selectedItem) {
      const translate = selectedItem[targetLang];
      const alternatives = translate.length > 1 ? translate.slice(1) : [];
      setAlternatives(alternatives.length > 0 ? alternatives : []);
      setTextOutput(translate[0]);
    } else {
      setAlternatives([]);
      setTextOutput(textInput);
    }
  }, [textInput, targetLang, srcLang, textOutput]);

  function handleTextInputChange(event) {
    setTextInput(event.target.value);
  }

  function handleSrcLangChange(event) {
    setSrcLang(event.target.value);
  }

  function handleTargetLangChange(event) {
    setTargetLang(event.target.value);
  }

  function clearTextInput() {
    setTextInput("");
  }

  function copyTextOutput() {
    setCopyDone(true);
    navigator.clipboard.writeText(textOutput);
  }

  function swapLang() {
    setSrcLang(targetLang);
    setTargetLang(srcLang);
  }

  return (
    <div className="translator-container">
      <div className="language-selectors">
        <div className="source-selector language-selector side-column">
          <select value={srcLang} onChange={handleSrcLangChange}>
            <option value="os">Ostravština</option>
            <option value="cz">Čeština</option>
            <option value="en">Angličtina</option>
          </select>
        </div>

        <div className="middle-column">
          <div className="swap-container">
            <img src={swap} alt="swap" onClick={swapLang} />
          </div>
        </div>

        <div className="target-selector language-selector side-column">
          <select value={targetLang} onChange={handleTargetLangChange}>
            <option value="os">Ostravština</option>
            <option value="cz">Čeština</option>
            <option value="en">Angličtina</option>
          </select>
        </div>
      </div>
      <div className="text-input-container">
        <div className="close-container">
          <img src={close} alt="copy" onClick={clearTextInput} />
        </div>
        <div className="side-column text-input">
          <textarea
            value={textInput}
            onChange={handleTextInputChange}
            placeholder="Zadejte text"
          ></textarea>
          <div className="icons-input">
            <div>
              <img src={mic} alt="mic" />
            </div>
            <div>
              <img src={audio} alt="audio" />
            </div>
          </div>
        </div>
        <div className="middle-column"></div>
        <div className="side-column text-output">
          <textarea value={textOutput} placeholder="Překlad"></textarea>
          <div className="icons-input">
            <div>
              <img
                src={copyDone ? copied : copy}
                alt="copy"
                onClick={copyTextOutput}
              />
            </div>
            <div>
              <img src={audio} alt="audio" />
            </div>
          </div>
        </div>
      </div>

      {alternatives.length > 0 && (
        <div className="meanings-container">
          <p>Překlady výrazu {textInput}</p>
          <p style={{ color: "gray", marginTop: "20px" }}>podstatné jméno</p>
          <hr></hr>
          <Alternatives alternatives={alternatives} />
        </div>
      )}
    </div>
  );
}

function Alternatives(props) {
  return (
    <>
      {props.alternatives.map((item, index) => (
        <div key={index} className="alternative-translate">
          {item}
          <hr></hr>
        </div>
      ))}
    </>
  );
}

export default Translator;
