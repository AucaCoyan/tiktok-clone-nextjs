import { Box, Flex, Text } from "@chakra-ui/react";

export default function Banner({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <img src={imageUrl} alt="" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1}
          <br />
          {desc2}
        </Text>
      </Box>
    </Flex>
  );
}
