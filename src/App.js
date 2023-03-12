import Translator from "./translator";
import { data } from "./data";

function App() {
  return (
    <>
      {data.map((item, index) => (
        <Translator
          key={index}
          textInput={item.ostrava}
          textOutput={item.cz}
          alternatives={item.alternatives}
        />
      ))}
    </>
  );
}

export default App;
