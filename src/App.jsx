import { useState } from "react";
import "./App.css";
import { Heading } from "@chakra-ui/react";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const [userDrink, setUserDrink] = useState();

  const greeting = "Welcome to our cafe!";

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <Heading mb={8} fontSize={"3xl"} color={"green.400"}>
            {greeting}
          </Heading>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
