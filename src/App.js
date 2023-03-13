import Translator from "./translator";
import { data } from "./data";
import TranslatorActive from "./translatorActive";

function App() {
  return (
    /* <>
      {data.map((item, index) => (
        <Translator
          key={index}
          textInput={item.ostrava}
          textOutput={item.cz}
          alternatives={item.alternatives}
        />
      ))}
    </>*/
    <>
      <TranslatorActive
        textInput={data[0].ostrava}
        textOutput={data[0].cz}
        alternatives={data[0].alternatives}
      />
    </>
  );
}

export default App;
