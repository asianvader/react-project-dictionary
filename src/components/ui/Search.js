import React, { useState } from "react";

function Search() {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);

  const mwApiUrl = `https://dictionaryapi.com/api/v3/references/sd2/json/${text}?key=${process.env.REACT_APP_MW_API_KEY}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Word searching is ${text}`);
    const fetchData = async () => {
      const response = await fetch(mwApiUrl);
      const data = await response.json();
      console.log(data);
      setResult(data);
    };
    fetchData();
    setText("");
    console.log("result", result);
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
    </div>
  );
}

export default Search;
