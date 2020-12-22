import React from "react";

function WordDoesNotExist({ result, text }) {
  return (
    <section className="error">
      <div className="error__item">
        <h2>
          Uh oh. Looks like we can't find {text}. Did you mean any of the
          following words?
        </h2>
        {result.map((item) => (
          <ul>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}

export default WordDoesNotExist;
