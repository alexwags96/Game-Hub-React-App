import {
  Text,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../services/genreService";

interface Props {
  onSelectedGenre: (genreId: number) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Box>
        <Heading fontSize={"2xl"} marginBottom={3}>
          Genres
        </Heading>
        <List>
          {isLoading && <Spinner />}
          {data?.results.map((genre) => (
            <ListItem key={genre.id} paddingY={"5px"}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit={"cover"}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  textAlign={"left"}
                  whiteSpace={"normal"}
                  fontSize={"sm"}
                  variant={"link"}
                  fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                  onClick={() => onSelectedGenre(genre.id)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default GenreList;
