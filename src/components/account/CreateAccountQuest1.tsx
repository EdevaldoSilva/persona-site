import {
  Box,
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

function CreateAccountQuest1() {
  return (
    <div className='main'>
      <div className="w-2/5 h-2/3 p-6 bg-white shadow-sm rounded-sm">
        <div className="mb-4">
          <Heading marginBottom="2" size="md">
            Olá Usuário, bem-vindo(a) a Persona.
            <br /> Você está no caminho certo para a sua próxima grande
            oportunidade. Pronto para avançar?
          </Heading>
        </div>
        <div className="mb-4">
          <p>
            Responda a algumas perguntas e comece a construir o seu perfil e
            apresente a sua candidatura para funções abertas ou serviços dentro
            do nosso Marketplace e seja pago com segurança. Siga etapas rápidas
            abaixo e aproveite ao máximo a Persona:
          </p>
        </div>
        <Stack marginBottom={4} spacing={2}>
          <RadioGroup defaultValue="1">
            <Stack spacing={2}>
              <Radio value="1">
                Crie um perfil e compartilhe o seu trabalho
              </Radio>
              <Radio value="2">Junte-se ao nosso Marketplace</Radio>
              <Radio value="3">Precisa contratar? Junte-se como cliente</Radio>
            </Stack>
          </RadioGroup>
        </Stack>
        <Flex>
          <Box></Box>
          <Spacer />
          <Link to="/criar-conta-quest2">
            <Button colorScheme="blue">Começar</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
}

export default CreateAccountQuest1;
