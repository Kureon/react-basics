import { useState } from "react";
import "./DrinkChoice.css";
import { DrinkInput } from "./ui/DrinkInput";

const DrinkSearch = () => {
  const [searchField, setSearchField] = useState();

  return (
    <label>
      <DrinkInput />
    </label>
  );
};
