import { Flex } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      bgColor={"#06141D"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Flex>
  );
};

export default Layout;
