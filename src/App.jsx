import React from "react";
import "./App.css";
import { DrinkButton } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { coffee, tea } from "./utils/data";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const userDrink = tea;
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <DrinkButton drinkOne={tea.name} drinkTwo={coffee.name} />
      <DrinkChoice drink={userDrink} />
    </div>
  );
};
