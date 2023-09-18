import { useState } from 'react';
import { DrinkInput } from "./ui/DrinkInput";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState('test drink');

  return (
    <>
      <label>Search for drinks:</label>
      <DrinkInput />
      <p>{searchField}</p>
    </>
  );
};
