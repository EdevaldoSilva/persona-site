import {
  Button,
  Checkbox,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SharedAccount.css";

const CreateAccount = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className='main_create_account'>
      <div className="mt-10 mr-36 w-2/5 h-4/5 p-4 rounded-md bg-white">
        <div className="mb-4">
          <Heading size="md">Bem-vindo(a) a Persona</Heading>
          <Text fontSize="md">
            Já tem uma Persona ID?{" "}
            <Link className="text-blue-500 font-bold" to="/login">
              Faça o Login
            </Link>
          </Text>
        </div>
        <div className="mb-2">
          <Input placeholder="Email" type="email" />
        </div>
        <div className="flex justify-start gap-3 mb-2">
          <Input placeholder="Nome" />
          <Input placeholder="Sobrenome" />
        </div>
        <div className="mb-2">
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Senha"
            />
            <InputRightElement className="mr-2">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <div className="flex justify-start gap-1 mb-2">
          <Input type="date" placeholder="Seleccione a Data" />
        </div>
        <div className="mb-2">
          <Select placeholder="Escolha o seu país de Nascimento">
            <option>Angola</option>
            <option>Portugal</option>
            <option>Inglaterra</option>
            <option>Argélia</option>
            <option>Mali</option>
          </Select>
        </div>
        <div className="mb-2">
          <Checkbox>Entre em contato comigo por email</Checkbox>
        </div>
        <div className="mb-2">
          <p>
            Ao clicar em Criar conta, eu concordo que li e aceito os{" "}
            <span className="text-blue-500 font-bold">Termos de uso</span> e a{" "}
            <span className="text-blue-500 font-bold">
              Política de privacidade.
            </span>
          </p>
        </div>
        <div className="text-right">
          <Link to="/verificar-email">
            <Button colorScheme="blue">Criar Conta</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
