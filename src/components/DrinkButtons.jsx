import "./DrinkButtons.css";

export const DrinkButton = () => {
  return (
    <>
      <header>Would you like tea or coffee?</header>
      <div className="button-group">
        <button className="button">Tea</button>
        <button className="button">Cofee</button>
      </div>
    </>
  );
};
