export default Header;

import { MainGoal } from "./MainGoal ";
import reactImage from "./assets/react-core-concepts.png"

function Header() {
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {getReactDescription} React concepts you will need for almost any app
        you are going to build
      </p>
      <MainGoal></MainGoal>
    </header>
  );
}

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const getReactDescription = reactDescriptions[getRandomInt(2)];
