import "../components/DrinkItem.css";

export const DrinkItem = ({ drink }) => {
  return (
    <div>
      <img src={drink.imgUrl} alt={drink.alt} width={75} height={75} />
      <p>{drink.name}</p>
    </div>
  );
};
