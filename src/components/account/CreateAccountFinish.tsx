import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

function CreateAccountFinish() {
  return (
    <div className='main'>
      <div className="h-4/5 w-4/5">
        <Flex>
          <Box w="20rem" p={8} color="white">
            <Heading as="h1" size="sm">
              Persona
            </Heading>
            <Text fontSize="xs">Centro de Apoio »</Text>
            <Heading marginTop={32} as="h1" size="sm">
              Junta-te a nossa comunidade e fica por dentro de todas as
              novidades.
            </Heading>
          </Box>
          <Spacer />
          <Box w="40%" bg="white" p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h1" size="md">
              Parabéns. O seu perfil foi criado com sucesso!
            </Heading>
            <Text fontSize="sm">
              "O teu perfil é como te destacas dentro da multidão, continue a
              potenciá-lo. A Persona oferece um conjunto de ferramentas que te
              ajudarão a crescer todos os dias. É o que se usa para ganhar o
              trabalho, por isso vamos torná-lo um bom trabalho."
            </Text>
            <Box
              marginTop={10}
              p={6}
              bg="gray.200"
              borderWidth={1}
              borderRadius="lg"
            >
              <HStack>
                <Avatar
                  size="xl"
                  name="Jailson Coluna"
                  src="https://bit.ly/code-beast"
                />{" "}
                <VStack>
                  <Box>
                    <Text fontSize="lg">Jailson Coluna</Text>
                    <Text fontSize="xs">
                      Eng.º Eletrotécnico | Gestor de Projetos
                    </Text>
                  </Box>
                </VStack>
              </HStack>
              <VStack marginTop={30} spacing={3}>
                <Text fontSize="xs" className="w-full">
                  <FaLocationArrow /> Distrito Urbano do Camama, Luanda - Angola
                </Text>
                <Text fontSize="xs" className="w-full">
                  <FaCheckCircle /> Disponível para contratação.<br/> 700,00 kz/ hr
                  (Negociável)
                </Text>
              </VStack>
            </Box>
            <Flex marginTop={4}>
              <Box></Box>
              <Spacer />
              <Link to="/">
                <Button colorScheme="blue">Explorar</Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </div>
    </div>
  );
}

export default CreateAccountFinish;
