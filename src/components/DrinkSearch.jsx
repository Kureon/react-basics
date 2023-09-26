import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { DrinkList } from "./DrinkList";
import { availableDrinks } from "../utils/data";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("test drink");

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput />
      <p>{searchField}</p>
      <DrinkList clickFn={clickFn} drinks={availableDrinks} />
    </>
  );
};
