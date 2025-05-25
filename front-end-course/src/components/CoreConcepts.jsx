import {CORE_CONCEPTS} from "../data"
import CoreConcept from "./CoreConcept"



export default function CoreConcepts(){

    return (
        
        <section id="core-concepts">
              <h2>Time to get started!</h2>
    
              <ul>
                {/* Output lists of DATA me .map() method! */}
                {CORE_CONCEPTS.map((coreConcept) => <CoreConcept key={coreConcept.title} {...coreConcept} />)}
                {/* <CoreConcept
                  title={CORE_CONCEPTS[0].title}
                  description={CORE_CONCEPTS[0].description}
                  image={CORE_CONCEPTS[0].image}
                />
                Spread Operator ...CORE_CONCEPTS[0]
                <CoreConcept {...CORE_CONCEPTS[1]} />
                <CoreConcept {...CORE_CONCEPTS[2]} />
                <CoreConcept {...CORE_CONCEPTS[3]} /> */}
              </ul>
            </section>


    )


}
