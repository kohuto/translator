import "./terms.css";
import search from "./images/search.png";
import audio from "./images/audio-speaker-on.png";

function Term(props) {
  const term = props.item.os[0];
  const explanation = props.item.explanation;
  const colorCombination = props.colorCombination;

  return (
    <div
      className="term-container"
      style={{ backgroundColor: colorCombination.bg }}
    >
      <div
        className="search-bar"
        style={{
          backgroundColor: colorCombination.bgmain,
        }}
      >
        <div
          className="search-icon"
          style={{ backgroundColor: colorCombination.bgsub }}
        >
          <img src={search} alt="search" />
        </div>
        <div
          className="search-text"
          style={{
            color: colorCombination.bgsub,
          }}
        >
          Co je to <span className="bold-term">{term}</span>?
        </div>
        <div
          className="search-button"
          style={{
            backgroundColor: colorCombination.bgsub,
            color: colorCombination.bgmain,
          }}
        >
          Hledat
        </div>
      </div>
      <div
        className="explanation-container"
        style={{
          backgroundColor: colorCombination.bgmain,
          color: colorCombination.bgsub,
        }}
      >
        <div className="explanation-header">
          <div
            className="audio-speaker"
            style={{ backgroundColor: colorCombination.bgsub }}
          >
            <img src={audio} alt="audio" />
          </div>
          <div className="term">{term}</div>
        </div>
        <div className="explanation">{explanation}</div>
      </div>
    </div>
  );
}

export default Term;
