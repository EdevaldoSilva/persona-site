import { Button, VStack, Stack, Text, Heading } from "@chakra-ui/react";
import React from "react";

function CreateAccountQuest5() {
  return (
    <div className="flex items-center justify-end">
      <div>
        <Stack spacing={3}>
          <Heading as="h3" size="lg">
            Olá Usuário, bem-vindo(a) a Persona. Você está no caminho certo para
            a sua próxima grande oportunidade. Pronto para avançar?
          </Heading>
          <Text fontSize="xl">
            Responda a algumas perguntas e comece a construir o seu perfil e
            apresente a sua candidatura para funções abertas ou serviços dentro
            do nosso Marketplace e seja pago com segurança. Siga etapas rápidas
            abaixo e aproveite ao máximo a Persona:
          </Text>
          <Text fontSize="sm">
            (Pode escolher várias opções agora e poderá editá-las mais tarde!)
          </Text>
        </Stack>
        <VStack spacing={4}>
          
        </VStack>
        <Button colorScheme="blue">Começar</Button>
      </div>
    </div>
  );
}

export default CreateAccountQuest5;
