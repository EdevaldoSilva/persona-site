import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

const CreateAccountQuest2 = () => {
  return (
    <div className='main'>
      <div className="w-2/3 h-2/3 p-12 bg-white shadow-sm rounded-sm">
        <Stack>
          <Heading as="h1" size="lg">
            Alguma vez foi freelancer ou trabalhou de forma autónoma?
          </Heading>
          <Heading as="h2" size="md">
            Isto irá ajudar-nos a dar-lhe o suporte necessário ao longo do
            caminho.
          </Heading>
          <Text fontSize="sm">
            (Não partilharemos a sua resposta com mais ninguém, incluindo
            potenciais clientes)
          </Text>
        </Stack>
        <Stack marginBottom={4} spacing={2}>
          <RadioGroup defaultValue="1">
            <Stack spacing={2}>
              <Radio value="1">Não, para mim é novidade.</Radio>
              <Radio value="2">
                Tentei, mas faltou condições para continuar.
              </Radio>
              <Radio value="3">Sim, tenho alguma experiência.</Radio>
            </Stack>
          </RadioGroup>
        </Stack>
        <Flex>
          <Box></Box>
          <Spacer />
          <Link to="/criar-conta-quest3">
            <Button colorScheme="blue">Seguinte</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default CreateAccountQuest2;
