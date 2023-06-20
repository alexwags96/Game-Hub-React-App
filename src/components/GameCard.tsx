import React from "react";
import { Game } from "../entities/Game";
import {
  Image,
  Card,
  CardBody,
  Heading,
  Text,
  HStack,
  ScaleFade,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { isValidMotionProp, motion } from "framer-motion";
import useGameQueryStore from "../store";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

// const ChakraBox = chakra(motion.div, {
//   /**
//    * Allow motion props and non-Chakra props to be forwarded.
//    */
// });

const GameCard = ({ game }: Props) => {
  const { gameQuery } = useGameQueryStore();
  return (
    <>
      <Card>
        {/* whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
            cursor: "pointer",
          }}
          whileTap={{ scale: 0.9 }} */}

        <Image
          // _hover={{ cursor: "pointer" }}
          src={getCroppedImageUrl(game.background_image)}
        />

        <CardBody>
          <HStack marginBottom={3} justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms?.map(({ platform }) => platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
