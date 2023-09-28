import { Button } from "./ui/Button";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const DrinkChoice = ({ drink, onClick }) => {
  return (
    <>
      <Modal>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Your choice: {drink.name}</ModalHeader>
            <ModalCloseButton />
            <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
            <p>Your drink will be ready in a few minutes</p>
            <ModalFooter>
              <Button text={"Change selection"} onClick={() => onClick()} />
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};
