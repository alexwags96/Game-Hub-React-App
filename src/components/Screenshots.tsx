import {
  Box,
  Button,
  CloseButton,
  flexbox,
  Image,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}
interface Gallery {
  id: number;
  image: string;
}

const Screenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  const [selectedScreenshot, setSelectedScreenshot] = useState<Gallery>();
  const [open, setOpen] = useState(false);

  const handleNextClick = (id: number) => {
    const nextImg = data?.results.filter((screen) => screen.id === id + 1)[0];
    if (nextImg) return setSelectedScreenshot(nextImg);
    else return setSelectedScreenshot(data?.results[0]);
  };
  const handlePreviousClick = (id: number) => {
    const nextImg = data?.results.filter((screen) => screen.id === id - 1)[0];
    if (nextImg) return setSelectedScreenshot(nextImg);
    else return setSelectedScreenshot(data?.results[data?.results.length - 1]);
  };
  const handleClick = (id: number, image: string) => {
    setSelectedScreenshot({
      id: id,
      image: image,
    });
    setOpen(true);
  };

  // const { isOpen, onOpen, onClose } = useDisclosure();
  if (error) throw error;
  if (isLoading) return null;

  return data ? (
    <>
      <Box
        display={open ? "block" : "none"}
        position="fixed"
        top={"0"}
        left="0"
        width={"100%"}
        height="100%"
        bg="rgba(0, 0, 0, 0.6)"
      >
        <Image
          src={selectedScreenshot?.image}
          margin-left="auto"
          margin-right="auto"
          width="50%"
          top={"15%"}
          left={"25%"}
          position={"absolute"}
        />
        <Box left={"5%"} top="50%" position={"absolute"}>
          <Button onClick={() => handlePreviousClick(selectedScreenshot?.id!)}>
            Previous
          </Button>
        </Box>
        <Box right={"5%"} top="50%" position={"absolute"}>
          <Button onClick={() => handleNextClick(selectedScreenshot?.id!)}>
            next
          </Button>
        </Box>
        <Box right={"25%"} top="15%" position={"absolute"}>
          <CloseButton onClick={() => setOpen(false)} />
        </Box>
      </Box>
      <SimpleGrid
        columns={[1, null, 2]}
        spacing="5"
        marginTop={10}
        // onClick={() => setOpen(false)}
      >
        {data?.results.map((screenshot) => (
          <Box
            key={screenshot.id}
            
            onClick={() => {
              handleClick(screenshot.id, screenshot.image);

              // onOpen();
            }}
          >
            <Image
              _hover={{
                transform: "scale(1.03)",
                transition: "transform .15s ease-in",
                cursor: "pointer",
              }}
              src={screenshot.image}
            />
          </Box>
        ))}
      </SimpleGrid>

      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent> */}
      {/* <ModalHeader>{selectedScreenshot?.id}</ModalHeader> */}
      {/* <ModalCloseButton /> */}
      {/* <ModalBody>
            <Box>
              <Image
                src={selectedScreenshot?.image}
                boxSize="sm"
                objectFit="contain"
                display="block"
                marginLeft="auto"
                marginRight="auto"
                w={"auto"}
              />
            </Box>
            <Box right={"5%"} top="50%" position={"absolute"}>
              <Button onClick={() => handleClick(selectedScreenshot?.id!)}>
                next
              </Button>
            </Box>
          </ModalBody>

          <ModalFooter> */}
      {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button> */}
      {/* </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  ) : null;
};

export default Screenshots;
