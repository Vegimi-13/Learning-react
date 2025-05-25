import { useState,Fragment } from "react";

import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import {EXAMPLES} from './data.js';
import TabButton from "./components/TabButton.jsx";


// console.log(test);
//test PUSH



function App() {

    const [selected, setSelected] = useState('');
    function handleSelect(selectedB) {
      setSelected(selectedB);
      // console.log(selected);
    }
    let tabContent = <p>Please select a topic!</p>

    if(selected){
      tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selected].title}</h3>
            <p>{EXAMPLES[selected].description}</p>
            <pre>
              <code>{EXAMPLES[selected].code}</code>
            </pre>
          </div>
    }

  return (

    <>
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
            <TabButton isSelected={selected === 'components'} onSelect={()=>handleSelect('components')}>Component </TabButton>
            <TabButton isSelected={selected === 'jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selected === 'props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selected === 'state'} onSelect={()=>handleSelect('state')}>State</TabButton>
            {/* Component composition +
                Ngjashem me qysh e kishim perdor ne HTML direkt */}
          </menu>


          {/* Render content conditionally */}
          {tabContent}
          
          {/* {selected} */}
        </section>



      </main>
    </>
  );
}

export default App;
