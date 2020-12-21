import React from "react";

function ResultsCardGrid({ isLoading, result }) {
  return isLoading ? null : (
    <section>
      {result[0].shortdef}
      {result[0].meta.uuid}
    </section>
  );
}

export default ResultsCardGrid;
