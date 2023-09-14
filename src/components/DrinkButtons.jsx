import "./DrinkButtons.css";
import { Button } from "./ui/Button";

export const DrinkButton = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <header>Would you like tea or coffee?</header>
      <div className="button-group">
        <Button text={drinkOne}></Button>
        <Button text={drinkTwo}></Button>
      </div>
    </>
  );
};
