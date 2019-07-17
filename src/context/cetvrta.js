import React, { useContext } from "react";

import { CTX } from "./Store";

export default function Poslednja() {
  const [appState, updateState] = useContext(CTX);

  return (
    <div style={{ border: "2px solid red" }}>
      <button onClick={() => updateState({ color: "blue" })}>Promena</button>

      <div>
        <h2 style={{ color: "pink" }}>{appState.naziv}</h2>
        <div style={{ color: "red" }}>
          <h2 className={appState.color}>Fail Cetvrta.js</h2>
          <p
            style={{
              color: "blue",
              border: "2px solid green",
              textAlign: "justify",
              padding: 10
            }}
          >
            Mesto gde je potrebno dodati mogucnost za citanje podataka iz
            funkcije
            <br />
            function noviPodaci
          </p>
          <p
            style={{
              color: "blue",
              border: "2px solid green",
              textAlign: "justify",
              padding: 10
            }}
          >
            <b>Sta mi je problem:</b>
            <br />
            Podaci koje funkcija noviPodaci u failu Store dobija sa localhosta
            iz faila posts.json trebali bi da se proslede kao i podaci konstanti
            color i ime kroz konstantu statHooks, kako bi se mogli prikazati
            preko React context-a u nekoj drugoj komponenti.
            <br />
            <b>Na primer u cetvrta.js</b>
            <br />
            <b>Napomena:</b>Kod react aplikacija u razvojnom nacinu rada
            aplikacije folder public je isvor servera sa http://localhost:3000
            gde se nalzi fail posts.json
          </p>
        </div>
      </div>
    </div>
  );
}
