import { Button, Select } from "@chakra-ui/react";
import React from "react";

const CreateAccountQuest4 = () => {
  return (
    <div className="card mx-auto w-3/5 h-screen">
      <div className="card-body mt-20">
        <div className="mb-16">
          <h2 className="card-title">
            Qual é o principal serviço que oferece??
          </h2>
          <p>
            Escolha as categorias que melhor descrevem o tipo de trabalho que
            faz para que possamos mostrar-lhe o cliente certo nos resultados de
            pesquisa.
          </p>
        </div>
        <div>
          <Select placeholder="Selecione a Categoria">
            <option>Categoria 1</option>
            <option>Categoria 2</option>
            <option>Categoria 3</option>
          </Select>

          <Select placeholder="Selecione a Sub-Categoria">
            <option disabled selected>
              Selecione a Sub-Categoria
            </option>
            <option>SubCategoria 1</option>
            <option>SubCategoria 2</option>
            <option>SubCategoria 3</option>
          </Select>
        </div>
        <div>
          <Button colorScheme="blue">Seguinte</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountQuest4;
