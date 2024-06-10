import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export function SkeltonCard() {
  return (
    <div className=" flex flex-col gap-2 rounded-lg bg-white">
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    </div>
  );
}
