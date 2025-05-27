import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selected, setSelected] = useState("");
  function handleSelect(selectedButton) {
    setSelected(selectedButton);
  }

  let tabContent = <p>Please select a topic!</p>;

  if (selected) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
          <code>{EXAMPLES[selected].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer = "menu"
        buttons={
          <>
            <TabButton
              isSelected={selected === "components"}
              onClick={() => handleSelect("components")}
            >
              Component{" "}
            </TabButton>
            <TabButton
              isSelected={selected === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selected === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selected === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
