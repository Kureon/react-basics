import { Center, Image, Text } from "@chakra-ui/react";

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <>
      <Center
        gap={8}
        cursor={"pointer"}
        className="drink-item"
        onClick={() => clickFn(drink)}
      >
        <Image src={drink.imgUrl} alt={drink.alt} width={75} height={75} />
        <Text fontWheight={"450"}>{drink.name}</Text>
      </Center>
    </>
  );
};
