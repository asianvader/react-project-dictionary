import React, { useState } from "react";
import ResultsCardGrid from "./ResultsCardGrid";

function Search() {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);
  const [wordExists, setWordExists] = useState(true);

  const mwApiUrl = `https://dictionaryapi.com/api/v3/references/sd2/json/${text}?key=${process.env.REACT_APP_MW_API_KEY}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async() => {
      const response = await fetch(mwApiUrl)
        if(!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
      const data = await response.json();
      console.log(data);
      if(typeof data[0] === "string") {
        setWordExists(false);
      }
      setResult(data);
    };
    fetchData();
  };

  return (
    <div>
      <section className="search">
        <form onSubmit={handleSubmit} className="search__form">
          <input
            type="text"
            placeholder="Search word"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="submit" value="Submit" className="search__submit" />
        </form>
      </section>
      <ResultsCardGrid result={result} wordExists={wordExists} text={text} />
    </div>
  );
}

export default Search;
