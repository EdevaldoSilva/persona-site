/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaDotCircle, FaLocationArrow } from "react-icons/fa";
import profile from "../../assets/profile_template.png";

const FreelancerProfile = () => {
  return (
    <>
      <section className="mt-2 py-16 px-10">
        <div className="mx-auto max-w-6xl grid grid-flow-col gap-2">
          <div>
            <Image
              src={profile}
              className="w-80 h-80 rounded-full"
              alt="Perfil Freelancer"
            />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-semibold">Etna de Souza</h2>
            <h6 className="mt-2">Freelancer | Contabilista</h6>
            <p className="mt-4">
              Contabilista e Master Business Administration (MBA), entusiasta
              com 10 anos de experiência em auditoria financeira. Especialista
              em análise financeira e patrimonial e estudos de viabilidade
              económica… <span>Ler mais»</span>
            </p>
            <p className="mt-4">
              Serviços a partir de 10.000,00 AOA <br />
              <FaDotCircle className="text-green-800" /> Disponível para
              contrato
            </p>
            <div className="text-right flex flex-col gap-2 items-end">
              <Button
                color="white"
                bgColor="gray.800"
                _hover={{ bgColor: "gray.600" }}
                size="md"
                borderRadius="20"
              >
                Negociar
              </Button>
              <Button colorScheme="gray" borderRadius="20">
                Proximo
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4 ml-10">
          <Text fontSize="xs">Views 297 940</Text>
          <Text fontSize="xs">
            <FaLocationArrow /> Distrito Urbano do Camama, Luanda - Angola
          </Text>
        </div>
      </section>
    </>
  );
};

export default FreelancerProfile;
