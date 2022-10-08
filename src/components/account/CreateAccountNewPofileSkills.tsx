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
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import React from "react";
import { FaPlus, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

const CreateAccountNewProfileSkills = () => {
  return (
    <div className='main'>
      <div className="w-4/5 h-fit p-10 bg-white shadow-sm rounded-sm">
        <Stack marginBottom={2}>
          <Heading as="h1" size="md">
            Habilidades
          </Heading>
          <Text fontSize="sm">
            As suas habilidades mostram aos clientes qual é o seu poder de
            oferta e ajudam-nos a escolher quais os trabalhos se adequam ao seu
            perfil. Comece a escrever para escolher as suas habilidades. O nosso
            algoritmo recomendará publicações de trabalhos especificas para si
            com base nas suas habilidades, então escolha cuidadosamente para
            obter o melhor agrupamento.
          </Text>
        </Stack>
        <VStack marginBottom={4}>
          <FormControl>
            <FormLabel>Habilidades</FormLabel>
            <Input placeholder="Começas a escrever para procurar habilidades" />
          </FormControl>
        </VStack>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Línguas</Th>
                <Th>Proficiência</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Português</Td>
                <Td>
                  <Select placeholder="Meu Nível"></Select>
                </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>
                  <Button
                    leftIcon={<FaPlus />}
                    colorScheme="gray"
                    variant="ghost"
                  >
                    Adicionar uma língua
                  </Button>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <Flex marginTop={4}>
          <Link to="/criar-conta-experiencia">
            <Button colorScheme="gray">Anterior</Button>
          </Link>
          <Spacer />
          <Link to="/criar-conta-bio">
            <Button colorScheme="blue">Próximo</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default CreateAccountNewProfileSkills;
