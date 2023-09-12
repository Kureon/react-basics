import React from "react";
import "./App.css";
import { DrinkButton } from "./components/DrinkButtons";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <DrinkButton />
    </div>
  );
};
