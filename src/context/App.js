import React from "react";
import Store from "./Store";
import Treca from "./treca";
import Ctvrta from "./cetvrta";

export default function App() {
  return (
    <Store>
      <div>
        <Treca />
      </div>
      <Ctvrta />
    </Store>
  );
}
