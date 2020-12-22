import React from "react";

function WordDoesNotExist({ result, text }) {
  return (
    <section>
      <h2>
        Uh oh. Looks like we can't find {text}. Did you mean any of the
        following words:{" "}
      </h2>
      {result.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))}
    </section>
  );
}

export default WordDoesNotExist;
