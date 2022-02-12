import React, { useState } from "react";
import Markdown from "react-mark";

const Markdownreact = () => {
  const [input, setInput] = useState("hello");
  return (
    <>
      <div className="main_div">
        <div className="heading">
          <h1>MARKDOWN EDITOR</h1>
        </div>

        <div className="center_div">
          <textarea
            className="left_side"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <div className="right_side">
            <Markdown>{input}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Markdownreact;
