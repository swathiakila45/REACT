import { CORE_CONCEPTS } from './data'
import Header from './Components/Header'  //Default Export 
import { CoreConcepts } from './Components/CoreConcepts';  // Named Export 
import TabButton from './Components/TabButton';


function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul >
            <CoreConcepts title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description} /> {/*Long way to pass the arguments*/}
            <CoreConcepts {...CORE_CONCEPTS[1]} /> {/*Effective way to pass the arguments  */}
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>

    </div>
  );
}

export default App;
