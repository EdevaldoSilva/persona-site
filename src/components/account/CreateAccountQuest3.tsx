import {
  Box,
  Button,
  ButtonGroup,
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

const CreateAccountQuest3 = () => {
  return (
    <div className='main'>
      <div className="w-2/3 h-2/3 p-12 bg-white shadow-sm rounded-sm">
        <Stack marginBottom={6}>
          <Heading as="h1" size="lg">
            Qual é o seu objetivo dentro do mercado liberal?
          </Heading>
          <Text fontSize="md">
            Queremos destacar as oportunidades que melhor se adequam aos seus
            objetivos e mostrar todas as possibilidades.
          </Text>
        </Stack>
        <Stack marginBottom={4} spacing={2}>
          <RadioGroup defaultValue="1">
            <Stack spacing={2}>
              <Radio value="1">
                Criar a minha principal fonte de rendimento.
              </Radio>
              <Radio value="2">Criar uma fonte de rendimento extra.</Radio>
              <Radio value="3">Adquirir experiência profissional.</Radio>
              <Radio value="4">
                Ainda não tenho nenhum objetivo, estou a explorar.
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>
        <Flex>
          <Link to="/criar-conta-quest2">
            <Button colorScheme="gray">Anterior</Button>
          </Link>
          <Spacer />
          <Link to="/criar-conta-quest4">
            <Button colorScheme="blue">Seguinte</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default CreateAccountQuest3;
