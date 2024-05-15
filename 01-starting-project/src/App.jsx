import { MainGoal } from "./MainGoal ";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const getReactDescription = reactDescriptions[getRandomInt(2)];

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {getReactDescription} React concepts you will need for
        almost any app you are going to build
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <MainGoal></MainGoal>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
