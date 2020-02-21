import React, { Component } from "react";
import escape from "lodash.escape";
import transform from "../lib/transform";

interface TransformerProps {}
interface TransformerState {
  input: string;
}

class Transformer extends Component<TransformerProps, TransformerState> {
  state: TransformerState = {
    input: "ni3hao3ma",
  };

  render() {
    const output = transform(this.state.input).trim();
    const escapedOutput = transform(escape(this.state.input)).trim();

    return (
      <div>
        <div style={{ color: "#777", fontSize: "10px" }}>Pinyin input</div>
        <input
          style={{
            display: "block",
            padding: "5px",
            width: "100%",
          }}
          value={this.state.input}
          onChange={evt => this.setState({ input: evt.target.value })}
        />

        {escapedOutput && (
          <p style={{ marginTop: "30px" }}>
            <div style={{ color: "#777", fontSize: "10px" }}>
              Rendered Output:
            </div>
            <span dangerouslySetInnerHTML={{ __html: escapedOutput }} />
          </p>
        )}
        {output && (
          <p style={{ marginTop: "30px" }}>
            <div style={{ color: "#777", fontSize: "10px" }}>HTML Output:</div>
            {output}
          </p>
        )}
      </div>
    );
  }
}

export default Transformer;
