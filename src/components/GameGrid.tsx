import {
  Box,
  Button,
  Center,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const page_size = 2;

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );
  return (
    <Box padding={"10px"}>
      <InfiniteScroll
        dataLength={fetchedGamesCount || 0} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={
          <Box textAlign={"center"}>
            {isFetchingNextPage && (
              <Button marginY={5} justifyContent={"space-between"}>
                <Spinner />
              </Button>
            )}
            {!hasNextPage && (
              <Button marginY={5} justifyContent={"space-between"}>
                End !!!
              </Button>
            )}
          </Box>
        }
        // endMessage={
        //   <Box textAlign={"center"}>
        //     <Button marginY={5} justifyContent={"space-between"}>
        //       Yay
        //     </Button>
        //   </Box>
        // }
        // below props only if you need pull down functionality
      >
        <SimpleGrid
          margin={3}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages?.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>

      {/* {hasNextPage && (
        <Button
          marginY={5}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
    </Box>
  );
};

export default GameGrid;
