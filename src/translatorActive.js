import React, { useState, useEffect } from "react";
import "./translator.css"; // import the CSS file
import swap from "./images/swap.png";
import mic from "./images/mic.png";
import copy from "./images/copy.png";
import copied from "./images/checked.png";
import audio from "./images/audio-speaker-on.png";
import close from "./images/close.png";
import { data } from "./data"; // import the data array

function TranslatorActive() {
  const [alternatives, setAlternatives] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("fr");
  const [copyDone, setCopyDone] = useState(false);

  useEffect(() => {
    setCopyDone(false);
    const selectedItem = data.find((item) => item.ostrava === textInput);
    if (selectedItem) {
      setAlternatives(selectedItem.alternatives);
      if (targetLang === "sq") {
        setTextOutput(selectedItem.en);
      } else {
        setTextOutput(selectedItem.cz);
      }
    } else {
      setAlternatives([]);
      setTextOutput(textInput);
    }
  }, [textInput, targetLang]);

  function handleTextInputChange(event) {
    setTextInput(event.target.value);
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

  return (
    <div className="translator-container">
      <div className="language-selectors">
        <div className="source-selector language-selector side-column">
          <select value={sourceLang}>
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

export default TranslatorActive;
