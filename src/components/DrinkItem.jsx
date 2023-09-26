import "../components/DrinkItem.css";

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <>
      <button className="drink-item" onClick={() => clickFn(drink)}>
        <img src={drink.imgUrl} alt={drink.alt} width={75} height={75} />
        <p>{drink.name}</p>
      </button>
    </>
  );
};
