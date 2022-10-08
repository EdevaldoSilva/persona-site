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
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

const CreateAccountNewProfileExperience = () => {
  return (
    <div className='main'>
      <div className="w-4/5 h-fit px-8 py-4 bg-white shadow-sm rounded-sm">
        <Stack marginBottom={2}>
          <Heading as="h1" size="md">
            Experiência profissional
          </Heading>
          <Text fontSize="sm">
            Se tiver experiência de trabalho relevante, adiciona-a aqui.
            Freelancers que adicionam a sua experiência têm maior probabilidade
            de ganhar trabalho, mas se estás a começar, ainda podes criar um
            grande perfil. Vamos para a próxima página.
          </Text>
        </Stack>
        <VStack spacing={1}>
          <FormControl>
            <FormLabel>Título</FormLabel>
            <Input placeholder="Software Engineer" />
          </FormControl>

          <FormControl>
            <FormLabel>Empresa/Organização</FormLabel>
            <Input placeholder="Microsoft" />
          </FormControl>

          <HStack spacing={8} className="w-full">
            <FormControl>
              <FormLabel>Localização</FormLabel>
              <Input placeholder="Luanda" />
            </FormControl>
            <FormControl>
              <FormLabel>Região/ País</FormLabel>
              <Select placeholder="Selecione a Categoria">
                <option>Angola</option>
                <option>Brazil</option>
                <option>Moçambique</option>
              </Select>
            </FormControl>
          </HStack>

          <Stack className="w-full">
            <Checkbox defaultChecked>
              Estou atualmente a trabalhar nesta área
            </Checkbox>
          </Stack>

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
            <Textarea placeholder="" />
          </FormControl>
        </VStack>
        <Flex marginTop={4}>
          <Link to="/criar-conta-educacao">
            <Button colorScheme="gray">Anterior</Button>
          </Link>
          <Spacer />
          <Link to="/criar-conta-skills">
            <Button colorScheme="blue">Próximo</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default CreateAccountNewProfileExperience;
