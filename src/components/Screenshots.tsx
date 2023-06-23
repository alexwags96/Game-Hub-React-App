import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const Screenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (error) throw error;
  if (isLoading) return null;

  return data ? (
    <>
      <SimpleGrid columns={[1, null, 2]} spacing="10" marginTop={10}>
        {data?.results.map((screenshot) => (
          <Box key={screenshot.id}>
            <Image src={screenshot.image} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  ) : null;
};

export default Screenshots;
