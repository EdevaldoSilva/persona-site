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
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

const CreateAccountNewProfileEducation = () => {
  return (
    <div className='main'>
      <div className="w-4/5 h-fit px-8 py-4 bg-white shadow-sm rounded-sm">
        <Stack marginBottom={2}>
          <Heading as="h1" size="md">
            Adicione a sua educação
          </Heading>
          <Text fontSize="sm">
            Os diplomas não são obrigatórios. Adicione qualquer educação
            relevante e ajude-nos a tornar o seu perfil mais visível.
          </Text>
        </Stack>
        <VStack spacing={1}>
          <FormControl>
            <FormLabel>Título</FormLabel>
            <Input placeholder="Universidade Agostinho Neto" />
          </FormControl>

          <FormControl>
            <FormLabel>Grau</FormLabel>
            <Input placeholder="Licenciatura" />
          </FormControl>

          <HStack spacing={8} className="w-full">
            <FormControl>
              <FormLabel>Campo de Estudo</FormLabel>
              <Input placeholder="Bussiness" />
            </FormControl>
            <FormControl>
              <FormLabel>Regiao</FormLabel>
              <Select placeholder="Selecione a Categoria">
                <option>Angola</option>
                <option>Brazil</option>
                <option>Moçambique</option>
              </Select>
            </FormControl>
          </HStack>

          <HStack spacing={8} className="w-full">
            <FormControl>
              <FormLabel>Data de Inicio</FormLabel>
              <Input type="month" placeholder="De" />
            </FormControl>
            <FormControl>
              <FormLabel>Data de Fim</FormLabel>
              <Input type="month" placeholder="Até" />
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel>Descrição</FormLabel>
            <Textarea placeholder="Descrever os seus estudos, prémios, etc" />
          </FormControl>
        </VStack>
        <Flex marginTop={4}>
          <Link to="/criar-perfil">
            <Button colorScheme="gray">Anterior</Button>
          </Link>
          <Spacer />
          <Link to="/criar-conta-experiencia">
            <Button colorScheme="blue">Próximo</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default CreateAccountNewProfileEducation;
