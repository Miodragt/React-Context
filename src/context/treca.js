import React from "react";

import { CTX } from "./Store";

export default function Treca() {
  const [appState, updateState] = React.useContext(CTX);

  return (
    <div>
      <h2>
        Ruze su {appState.color},Vijoleta je {appState.color}{" "}
      </h2>
      <button onClick={() => updateState({ naziv: "novo ime moje je " })}>
        Promena imena
      </button>
      <div>
        <h2>{appState.naziv}</h2>
      </div>
    </div>
  );
}
