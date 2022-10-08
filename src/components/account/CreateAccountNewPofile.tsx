import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

const CreateAccountNewProfile = () => {
  return (
    <div className='main'>
      <div className="w-4/5 h-4/5">
        <Flex>
          <Box w="20rem" p={8} color="white">
            <VStack spacing="100%">
              <Box>
                <Heading as="h1" size="sm">
                  Gostaria de construir o seu perfil?
                </Heading>
                <Text fontSize="xs">
                  Precisamos conhecer a sua educação, experiências e
                  habilidades, pode editá-la antes de publicar.
                </Text>
              </Box>
              <Box>
                <Text as="em" fontSize="xs">
                  "O teu perfil é como te destacas da multidão. É o que se usa
                  para ganhar o trabalho, por isso vamos torná-lo um bom
                  trabalho.
                </Text>
              </Box>
            </VStack>
          </Box>
          <Spacer />
          <Box w="60%" bg="white" p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h1" size="md">
              Criar Perfil
            </Heading>
            <div className="py-6 px-3">
              <div className="mb-2">
                <HStack justify="start" align="start">
                  <Box>
                    <Avatar />
                    <br />
                    <Button>Upload Foto</Button>
                  </Box>
                  <Box>
                    <Input placeholder="Titulo" />
                    <Input placeholder="Cidade" />
                  </Box>
                </HStack>
              </div>
              <div className="mb-2">
                <FormControl id="endereço">
                  <FormLabel>Endereço* (Não vai aparecer no perfil)</FormLabel>
                  <Input placeholder="Endereço" />
                </FormControl>
              </div>
              <div className="mb-2">
                <FormControl id="ident">
                  <FormLabel>
                    Identificação* (Não vai aparecer no perfil)
                  </FormLabel>
                  <Input placeholder="BI/Passaporte" />
                </FormControl>
              </div>
              <div className="mb-2">
                <FormControl>
                  <FormLabel>Telefone*</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children="+244" />
                    <Input type="tel" placeholder="Telefone" />
                  </InputGroup>
                </FormControl>
              </div>
              <div className="mb-2 mt-6 text-center">
                <Button colorScheme="gray">Upload Currículo</Button>
              </div>
            </div>
            <Flex>
              <Box></Box>
              <Spacer />
              <Link to="/criar-conta-educacao">
                <Button colorScheme="blue">Próximo</Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default CreateAccountNewProfile;
