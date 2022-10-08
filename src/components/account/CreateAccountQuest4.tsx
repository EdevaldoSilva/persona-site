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
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

const CreateAccountQuest4 = () => {
  return (
    <div className='main'>
      <div className="w-2/3 h-2/3 p-12 bg-white shadow-sm rounded-sm">
        <Stack marginBottom={6}>
          <Heading as="h1" size="lg">
            Qual é o principal serviço que oferece?
          </Heading>
          <Text fontSize="md">
            Escolha as categorias que melhor descrevem o tipo de trabalho que
            faz para que possamos mostrar-lhe o cliente certo nos resultados de
            pesquisa.
          </Text>
        </Stack>
        <Stack marginBottom={4} spacing={2}>
          <Select placeholder="Selecione a Categoria">
            <option>Categoria 1</option>
            <option>Categoria 2</option>
            <option>Categoria 3</option>
          </Select>
          <Select placeholder="Selecione a Sub-Categoria">
            <option>SubCategoria 1</option>
            <option>SubCategoria 2</option>
            <option>SubCategoria 3</option>
          </Select>
        </Stack>
        <Flex>
          <Link to="/criar-conta-quest3">
            <Button colorScheme="gray">Anterior</Button>
          </Link>
          <Spacer />
          <Link to="/criar-conta-quest5">
            <Button colorScheme="blue">Seguinte</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default CreateAccountQuest4;
