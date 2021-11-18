import React from "react";
import "./style.css";
import { CollapsibleCard } from "../../components";

export function About() {
  return (
    <section>
      <h1>About</h1>
      <p>Welcome to Kahtwoot, the premier quiz application for hungry minds.</p>
      <CollapsibleCard label='Description'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illum nam quod dolores asperiores voluptatibus quisquam necessitatibus quo nemo voluptatem ipsam incidunt natus deleniti ab, aliquid adipisci delectus nihil saepe.</p>
      </CollapsibleCard>
      <CollapsibleCard label='Game Modes'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illum nam quod dolores asperiores voluptatibus quisquam necessitatibus quo nemo voluptatem ipsam incidunt natus deleniti ab, aliquid adipisci delectus nihil saepe.</p>
      </CollapsibleCard>
      <CollapsibleCard label='Instructions'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illum nam quod dolores asperiores voluptatibus quisquam necessitatibus quo nemo voluptatem ipsam incidunt natus deleniti ab, aliquid adipisci delectus nihil saepe.</p>
      </CollapsibleCard>

    </section>
  );
}
