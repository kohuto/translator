import Term from "./term";
import { colors_data } from "./colorsdata";
import { data } from "./data";

function TermsList() {
  const getColorCombination = () => {
    return Math.floor(Math.random() * (colors_data.length - 1));
  };

  return (
    <div>
      {data.map((item, index) => (
        <Term
          key={index}
          item={item}
          colorCombination={colors_data[getColorCombination()]}
        />
      ))}
    </div>
  );
}

export default TermsList;
