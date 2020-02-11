import React from "react";
import { render } from "react-dom";

import Cervejaria from "./Cervejaria";
import { Copo, ChamaParaBeber } from "./Cervejaria";

const App = () => (
  <div>
    <Cervejaria/>
    <Copo />
    <ChamaParaBeber />
  </div>
);

render(<App />, document.getElementById("root"));
