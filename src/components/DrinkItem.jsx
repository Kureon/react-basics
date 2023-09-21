export const DrinkItem = ({ drink }) => {
    return (
        <div>
            <img src={drink.imgUrl} alt={drink.alt} />
            <p>{drink.name}</p>
        </div >
    );
};