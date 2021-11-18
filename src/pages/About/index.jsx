import React from "react";
import "./style.css";
import { CollapsibleCard } from "../../components";

export function About() {
  return (
    <section>
      <h1>About</h1>
      <p>Welcome to Kahtwoot, the premier quiz application for hungry minds.</p>
      <CollapsibleCard label='Description'>
      <p>Here you can quiz yourself, and your friends, and compete for the highest scores between eachother and with the rest of the world.</p>
      </CollapsibleCard>
      <CollapsibleCard label='Game Modes'>
      <p>Unfortunately, we only have one game mode for now: but stay tuned!</p>
      </CollapsibleCard>
      <CollapsibleCard label='Instructions'>
      <p>Simply navigate to the menu, and press the new game button to begin a quiz. You can select from a variety of difficulties and topics, from 1 to 4 players.</p>
      </CollapsibleCard>
      <CollapsibleCard label="FutureFeatures">
        <p>New countdown timer between questions</p>
        <Timer321 />
      </CollapsibleCard>

    </section>
  );
}
