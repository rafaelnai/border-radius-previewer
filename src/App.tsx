import React from "react";
import BorderEditor from "containers/BorderEditor";
import preset from "jss-preset-default";
import { jss } from "react-jss";
import useStyles from "./styles";

jss.setup(preset());

const styles = {
  "@global": {
    body: {
      fontFamily: "Roboto, sans-serif",
      margin: 0,
      padding: 0,
    },
  },
};

jss.createStyleSheet(styles).attach();

function App() {
  const classes = useStyles();
  return (
    <main className={classes.app}>
      <BorderEditor />
    </main>
  );
}

export default App;
