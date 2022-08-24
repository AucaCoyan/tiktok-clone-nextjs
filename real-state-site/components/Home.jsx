import { Box } from "@chakra-ui/react";
import Banner from "./Banner";
import image from "../assets/images/house.jpg";

export default function Home({}) {
  return (
    <>
      <Box>this is a big red text</Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
    </>
  );
}
