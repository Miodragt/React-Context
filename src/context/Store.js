/**
 * Created by trika on 13-Jul-19.
 */
import React from "react";
import "whatwg-fetch";

export const CTX = React.createContext();

export default function Store(props) {
  const statHooks = React.useState({ color: colors, naziv: ime });

  return (
    <CTX.Provider value={statHooks}>
      <div>{props.children}</div>
    </CTX.Provider>
  );
}

const colors = ["blue", "pink", "zuta", "nela"];
const ime = ["plavo", "rozno", "zeleno", "crveno"];
/*
Podaci koje funkcija noviPodaci dobija sa localhosta iz faila
posts.json trebali bi da se proslede kao i podaci konstanti
color i ime kroz konstantu statHooks, kako bi se mogli prikazati
preko React context-a u nekoj drugoj komponenti.
Na primer u setvrta.js
Kod react aplikacaija urazvojnom nacinu rada aplikacije folder 
public je isvor servera sa http://localhost:3000  gde se nalzi 
fail posts.json
*/
export function noviPodaci() {
  fetch("./posts.json")
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log("parsed json iz funkcije noviPodaci", json);
      alert([json.name, json.id, json.email]);
    })
    .catch(function(ex) {
      console.log("parsing failed", ex);
    });
}

noviPodaci();
