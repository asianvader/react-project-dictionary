import React from "react";

function ResultItem({ item }) {
  console.log(item);
  return (
    <div>
      <h1>
        {item.meta.id} | {item.hwi.hw}
      </h1>
      <ul>
        <li>
          <strong>Definition: </strong>"{item.shortdef}"
        </li>
        <li>
          <strong>Word class: </strong>
          {item.fl}
        </li>
        {item.hwi.prs ? (
          <li>
            <strong>Pronunciation: </strong>
            {item.hwi.prs[0].mw}
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default ResultItem;
