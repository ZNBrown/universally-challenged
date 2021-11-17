import React from "react";
import "./style.css";
import { Timer321, CollapsibleCard } from "../../components";

export function About() {
  return (
    <section>
      <div className="backgroundWrapper"></div>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illum nam quod dolores asperiores voluptatibus quisquam necessitatibus quo nemo voluptatem ipsam incidunt natus deleniti ab, aliquid adipisci delectus nihil saepe.</p>
      <CollapsibleCard label='Description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illum nam quod dolores asperiores voluptatibus quisquam necessitatibus quo nemo voluptatem ipsam incidunt natus deleniti ab, aliquid adipisci delectus nihil saepe.</p>
      </CollapsibleCard>
      <CollapsibleCard label='Game Modes'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illum nam quod dolores asperiores voluptatibus quisquam necessitatibus quo nemo voluptatem ipsam incidunt natus deleniti ab, aliquid adipisci delectus nihil saepe.</p>
      </CollapsibleCard>
      <CollapsibleCard label='Instructions'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illum nam quod dolores asperiores voluptatibus quisquam necessitatibus quo nemo voluptatem ipsam incidunt natus deleniti ab, aliquid adipisci delectus nihil saepe.</p>
      </CollapsibleCard>

      <Timer321 />
    </section>
  );
}
