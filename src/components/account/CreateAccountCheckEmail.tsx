import { Box, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

function CreateAccountCheckEmail() {
  return (
    <div className='main'>
      <div className="w-6/12 h-1/3 shadow-md rounded-md p-6 text-center bg-white">
        <Box borderWidth={2} borderRadius={15} mb={3} p={2}>
          <Heading size="lg">Verifique seu email para prosseguir</Heading>
        </Box>
        <Link to="/criar-conta-quest1">
          <Button colorScheme="blue">Reenviar Email</Button>
        </Link>
      </div>
    </div>
  );
}

export default CreateAccountCheckEmail;
