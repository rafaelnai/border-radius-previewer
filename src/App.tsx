import React from "react";
import BorderEditor from "./containers/border-editor";
import preset from "jss-preset-default";
import { jss } from "react-jss";

jss.setup(preset());

const styles = {
  "@global": {
    body: {
      margin: 0,
      padding: 0,
    },
  },
};

jss.createStyleSheet(styles).attach();

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#4b6584", height: "100vh", width: "100vw" }}
    >
      <BorderEditor />
    </div>
  );
}

export default App;
