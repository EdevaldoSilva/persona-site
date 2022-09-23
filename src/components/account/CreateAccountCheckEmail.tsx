import { Box, Container, Flex, Stack, Heading, Button } from "@chakra-ui/react";
import React from "react";

function CreateAccountCheckEmail() {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"white"}>
      <Container
        maxW={"lg"}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
        >
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading
              as={"h2"}
              fontSize={{ base: "xl", sm: "2xl" }}
              textAlign={"center"}
              mb={5}
            >
              Verifique seu email para prosseguir
            </Heading>
          </Box>
        </Stack>
        <Button colorScheme='blue'>Reenviar Email</Button>
      </Container>
    </Flex>
  );
}

export default CreateAccountCheckEmail;
