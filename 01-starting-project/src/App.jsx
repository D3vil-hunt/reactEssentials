import Header from "./Header";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "./data";
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>

        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
