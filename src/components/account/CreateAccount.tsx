import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CreateAccount = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="bg-white flex justify-end h-screen">
      {/* <div className='my-20 mx-auto w-2/4 h-4/5'> */}
      <div className="mt-10 mr-16 w-2/4 h-4/5">
        <div className="mb-4">
          <h1>Criar uma Conta</h1>
          <p>
            Já tem uma Persona ID?{" "}
            <a className="text-blue-700" href="#">
              Faça o Login
            </a>
          </p>
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
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
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
          <select className="select select-bordered w-full max-w-xs"></select>
        </div>
        <div className="form-control mb-2">
          <Checkbox>Checkbox</Checkbox>
        </div>
        <div className="mb-2">
          <p>
            Ao clicar em Criar conta, eu concordo que li e aceito os Termos de
            uso e a Política de privacidade.
          </p>
        </div>
        <button className="btn btn-outline">Criar Conta</button>
      </div>
    </div>
  );
};

export default CreateAccount;
