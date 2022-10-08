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

const CreateAccountNewProfileBio = () => {
  return (
    <div className='main'>
      <div className="w-4/5 h-fit p-10 bg-white shadow-sm rounded-sm">
        <Stack marginBottom={2}>
          <Heading as="h1" size="md">
            Biografia
          </Heading>
          <Text fontSize="sm">
            Agora escreva uma biografia para contar ao mundo sobre si mesmo.
            Ajudar as pessoas a conhecê-lo num ápice. Em que trabalho é melhor?
            Diga-lhes claramente, usando parágrafos ou pontos de bala. Pode
            sempre editar mais tarde - certifique-se de que já é revisto!
          </Text>

          <FormControl>
            <FormLabel>Descrição</FormLabel>
            <Textarea rows={10} size="lg" />
          </FormControl>
        </Stack>

        <Flex marginTop={4}>
          <Link to="/criar-conta-skills">
            <Button colorScheme="gray">Anterior</Button>
          </Link>
          <Spacer />
          <Link to="/criar-conta-taxa">
            <Button colorScheme="blue">Próximo</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default CreateAccountNewProfileBio;
