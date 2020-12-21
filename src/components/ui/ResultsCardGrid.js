import React from "react";
import ResultItem from "./ResultItem";

function ResultsCardGrid({ isLoading, result }) {
  return isLoading ? null : (
    <section className="cards">
      {result.map((item) => (
        <ResultItem key={item.meta.uuid} item={item}></ResultItem>
      ))}
    </section>
  );
}

export default ResultsCardGrid;
