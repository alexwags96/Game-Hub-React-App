import { Button, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  const summary = !expanded ? children.substring(0, limit) + "..." : children;
  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  return (
    <Text>
      {summary}{" "}
      <Button
        onClick={() => setExpanded(!expanded)}
        marginLeft="1"
        size={"xs"}
        fontSize="bold"
        colorScheme={"yellow"}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
