import "./App.css";
import React, { useState } from "react";

function App() {
  const [dictionary, setDictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundWord = dictionary.find(
      (item) => item.word.toLowerCase() === word.toLowerCase()
    );
    if (foundWord) {
      setMeaning(foundWord.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for a word..."
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
      <h4>Definition:</h4>
      <p>{meaning}</p>
    </div>
  );
}

export default App;
