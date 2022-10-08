import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

function CreateAccountSetPaymentRate() {
  return (
    <div className='main'>
      <div className="w-4/5 h-4/5">
        <Flex>
          <Box w="20rem" p={8} color="white">
            <Box>
              <Heading as="h1" size="sm">
                Ótimo! Agora vamos definir a sua taxa da prestação de serviço.
              </Heading>
              <Text fontSize="xs">
                Os clientes verão esta taxa no seu perfil e nos resultados de
                pesquisa assim que publicar o seu perfil. Poderá negociar o
                tarifário sempre que lhe for apresentado uma proposta de
                contrato.
              </Text>
            </Box>
          </Box>
          <Spacer />
          <Box w="40%" bg="white" p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h1" size="sm">
              Definir taxa
            </Heading>
            <Text fontSize="xs">
              A taxa de Serviço é de 15% quando inicia um contrato com um novo
              cliente. Para valores superiores a 100.000,00 kz, a taxa é de 10%.
              Para além da definição da tarifa horária, existe a possibilidade
              de negociar diretamente com o cliente.
            </Text>
            <Box paddingTop={10}>
              <Text fontSize="md">Tarifa horária</Text>
              <Flex marginTop={4}>
                <Text marginLeft={8} fontSize="xs">
                  Valor total que o cliente verá
                </Text>
                <Spacer />
                <InputGroup w={32}>
                  <Input type="number" />
                  <InputRightElement
                    pointerEvents="none"
                    color="gray.600"
                    children="kz/h"
                  />
                </InputGroup>
              </Flex>
              <Flex marginTop={4}>
                <Text marginLeft={8} fontSize="xs">
                  Taxa de Serviço
                </Text>
                <Spacer />
                <InputGroup w={32}>
                  <Input type="number" />
                  <InputRightElement
                    pointerEvents="none"
                    color="gray.600"
                    children="kz/h"
                  />
                </InputGroup>
              </Flex>
              <Flex marginTop={4}>
                <Text marginLeft={8} fontSize="xs">
                  Valor estimado, após as taxas{" "}
                </Text>
                <Spacer />
                <InputGroup w={32}>
                  <Input type="number" />
                  <InputRightElement
                    pointerEvents="none"
                    color="gray.600"
                    children="kz/h"
                  />
                </InputGroup>
              </Flex>
            </Box>
            <Flex marginTop={4}>
              <Box></Box>
              <Spacer />
              <Link to="/criar-conta-finalizado">
                <Button colorScheme="blue">Salvar</Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </div>
    </div>
  );
}

export default CreateAccountSetPaymentRate;
