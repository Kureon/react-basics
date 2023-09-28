import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { DrinkList } from "./DrinkList";
import { availableDrinks } from "../utils/data";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput changeFn={handleChange} width={"auto"} />
      <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
    </>
  );
};
