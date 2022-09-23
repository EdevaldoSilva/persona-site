import { Button, Checkbox, VStack } from "@chakra-ui/react";
import React from "react";

function CreateAccountQuest1() {
  return (
    <div className="flex items-center justify-end">
      <div>
        <div>
          <h3>
            Olá Usuário, bem-vindo(a) a Persona. Você está no caminho certo para
            a sua próxima grande oportunidade. Pronto para avançar?
          </h3>
        </div>
        <div>
          <p>
            Responda a algumas perguntas e comece a construir o seu perfil e
            apresente a sua candidatura para funções abertas ou serviços dentro
            do nosso Marketplace e seja pago com segurança. Siga etapas rápidas
            abaixo e aproveite ao máximo a Persona:
          </p>
          <VStack spacing={4}>
            <Checkbox defaultChecked>
              Crie um perfil e compartilhe o seu trabalho
            </Checkbox>
            <Checkbox>Junte-se ao nosso Marketplace</Checkbox>
            <Checkbox>Precisa contratar? Junte-se como cliente</Checkbox>
          </VStack>
        </div>
        <Button colorScheme="blue">Começar</Button>
      </div>
    </div>
  );
}

export default CreateAccountQuest1;
