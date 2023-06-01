import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText noOfLines={3} spacing="4" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
