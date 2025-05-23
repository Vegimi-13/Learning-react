import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";

// console.log(test);



function App() {
    function handleSelect(selectedButton) {
      console.log(selectedButton);
    }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>

          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Spread Operator ...CORE_CONCEPTS[0] */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onSelect={()=>handleSelect('components')}>Component </TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
            {/* Component composition +
                Ngjashem me qysh e kishim perdor ne HTML direkt */}
          </menu>
          Dynamic Content
        </section>



      </main>
    </div>
  );
}

export default App;
