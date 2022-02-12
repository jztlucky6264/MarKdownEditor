import React, { useState } from "react";
import Markdown from "react-mark";
import { Resizable } from "re-resizable";

const Markdownreact = () => {
  const [input, setInput] = useState("hello");
  const [state, setState] = useState({ height: 500, width: 400 });
  return (
    <>
      <div className="main_div">
        <div className="heading">
          <h1>MARKDOWN EDITOR</h1>
        </div>
        <div className="editor_main">
          <div className="center_div">
            <Resizable
              className="left_side"
              size={{ width: state.width, height: state.height }}
              onResizeStop={(e, direction, ref, d) => {
                setState({
                  width: state.width + d.width,
                  height: state.height + d.height,
                });
              }}
            >
              <textarea
                className="textEditor"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </Resizable>

            <Resizable
              className="right_side"
              size={{ width: state.width, height: state.height }}
              onResizeStop={(e, direction, ref, d) => {
                setState({
                  width: state.width + d.width,
                  height: state.height + d.height,
                });
              }}
            >
              <div className="right_div">
                <Markdown>{input}</Markdown>
              </div>
            </Resizable>
          </div>
        </div>
      </div>
    </>
  );
};

export default Markdownreact;
