import { useState } from "react";
import "./App.css";

function App() {
  const list = [
    "Apple",
    "Mango",
    "Watermelon",
    "Banana",
    "Orange",
    "Strawberry",
  ];

  const [filteredList, setFilteredList] = useState(list);

  const searchFilterHandler = (event) => {
    console.log(event.target.value)
    if (event.target.value === "") {
      setFilteredList(list);
    }

    const value = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilteredList(value);
  };

  return (
    <div className="App">
      <input onChange={searchFilterHandler} />
      <div>
        <ul>
          {filteredList &&
            filteredList.map((item) => {
              return (
                <li key={item} style={{ listStyleType: "none" }}>
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
