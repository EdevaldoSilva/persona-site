import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

//Component to Create the custom radio
function RadioCard(props: any) {
  const { title, description, ...radioProps } = props;
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);

  return (
    <Box as="label" cursor="pointer">
      <input {...getInputProps({})} hidden />
      <Box
        {...getCheckboxProps()}
        w="100%"
        h="8rem"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        p={3}
      >
        <Heading textAlign="center" as="h5" size="md">
          {title}
        </Heading>
        <Text fontSize="xs">{description}</Text>
      </Box>
    </Box>
  );
}

function CreateAccountQuest5() {
  //Tratar do Radio em si
  const options = [
    {
      title: "Persona",
      description: "Pode navegar e licitar ou ser convidado por um cliente.",
    },
    {
      title: "Marketplace  ",
      description:
        "Defina o seu produto com preços e prazos. Crie uma vitrine para clientes comprarem de imediato.",
    },
    {
      title: "Parceiro ",
      description:
        "Venha crescer connosco. Receba suporte técnico, financiamento  ou trabalhe como recrutador de personas para um cliente e vice-versa.",
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    onChange: console.log,
  });

  return (
    <div className='main'>
      <div className="w-3/5 h-3/4 p-12 bg-white shadow-sm rounded-sm">
        <Stack marginBottom={5}>
          <Heading as="h1" size="lg">
            Como pretende se posicionar dentro da nossa comunidade?
          </Heading>
          <Text fontSize="md">
            Todos trabalham de forma diferente, por isso temos maneiras
            diferentes de te ajudar a ganhar trabalho.
          </Text>
          <Text fontSize="sm">
            (Pode escolher várias opções agora e poderá editá-las mais tarde!)
          </Text>
        </Stack>
        <HStack marginBottom={5} {...getRootProps()}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {options.map((value) => {
              return (
                <RadioCard
                  key={value.title}
                  title={value.title}
                  description={value.description}
                  {...getRadioProps({ value: value.title })}
                />
              );
            })}
          </Grid>
        </HStack>
        <Flex>
          <Link to="/criar-conta-quest4">
            <Button colorScheme="gray">Anterior</Button>
          </Link>
          <Spacer />
          <Link to="/criar-perfil">
            <Button colorScheme="blue">Criar Perfil</Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
}

export default CreateAccountQuest5;
