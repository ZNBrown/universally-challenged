import React from "react";
import "./style.css";
import { Timer321, CollapsibleCard } from "../../components";

export function About() {
  return (
    <section>
      <h1>About</h1>
      <h2>Description</h2>
      <h2>Game Modes</h2>
      <h2>Instructions</h2>
      <CollapsibleCard label='Click Here'>
        <p>About</p>
      </CollapsibleCard>
      <Timer321 />
    </section>
  );
}
