import React, { useState } from "react";
import ResultsCardGrid from "./ResultsCardGrid";

function Search() {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const mwApiUrl = `https://dictionaryapi.com/api/v3/references/sd2/json/${text}?key=${process.env.REACT_APP_MW_API_KEY}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const response = await fetch(mwApiUrl);
      const data = await response.json();
      console.log(data);
      setResult(data);
      setIsLoading(false);
    };
    fetchData();
    setText("");
    setIsLoading(true);
  };

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <label>
            Search:
            <input
              type="text"
              placeholder="Search word"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
      <ResultsCardGrid isLoading={isLoading} result={result}/>
    </div>
  );
}

export default Search;
