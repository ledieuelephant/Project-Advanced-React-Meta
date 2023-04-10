import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // You can also use the `imageSrc` prop to render the image.
  return <>
    <VStack backgroundColor={"white"} color={'black'} borderRadius={20}>
      <Image src={imageSrc} alt={title} borderRadius={20} />
        <VStack spacing={"4"} alignItems={"flex-start"} padding={"15px"}>
          <Heading fontSize={"lg"}>
            <Text>{title}</Text>
          </Heading>
          <Text fontWeight={"thin"}>{description}</Text>
          <HStack>
            <Text>See More</Text>
            <FontAwesomeIcon icon={faArrowRight} />
          </HStack>
        </VStack>
    </VStack>
  </>
};

export default Card;
