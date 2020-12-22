import React from "react";
import ResultItem from "./ResultItem";
import WordDoesNotExist from "./WordDoesNotExist";

function ResultsCardGrid({ result, wordExists, text }) {
  return !wordExists ? (
    <WordDoesNotExist result={result} text={text} />
  ) : (
    <section className="cards">
      {result.map((item) => (
        <ResultItem key={item.meta.uuid} item={item}></ResultItem>
      ))}
    </section>
  );
}

export default ResultsCardGrid;
