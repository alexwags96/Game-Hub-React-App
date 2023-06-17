import { Heading, Text } from "@chakra-ui/react";
import { GameQuery } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading fontSize={"50"} fontWeight={"bold"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
