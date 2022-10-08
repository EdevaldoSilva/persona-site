import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaDotCircle, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import profile from "../../assets/profile_template.png";

interface Freelancer {
  nome: string;
  area: string;
  localizacao: string;
  views: number;
}

let arrayFreelancers: Array<Freelancer> = [
  {
    nome: "Etna de Sousa",
    area: "Contabilista",
    localizacao: "Luanda, Angola",
    views: 4297940,
  },
  {
    nome: "Bruna Pacheco",
    area: "Fisioterapeuta",
    localizacao: "Bengo, Angola",
    views: 4297940,
  },
  {
    nome: "Pereira",
    area: "Mecânico automóvel",
    localizacao: "Cazenga, Luanda",
    views: 2040,
  },
  {
    nome: "Elizeu Dias",
    area: "Designer Gráfico",
    localizacao: "Benguela, Angola",
    views: 4297940,
  },
];

function Freelancers() {
  return (
    <>
      <section className="mt-2 py-16 px-10">
        <div className="mx-auto grid grid-cols-3 gap-2">
          {arrayFreelancers.map((freelancer) => (
            <div className="mt-4">
              <HStack>
                <div className="flex">
                  <Box>
                    <Link to="/freelancer">
                      <Image
                        src={profile}
                        alt="Imagem 1"
                        className="h-30 w-30 inline-block sm:h-72 md:h-96 md:w-96 lg:w-28 lg:h-28 rounded-full"
                      />
                    </Link>
                  </Box>
                  <div className="p-2">
                    <div>
                      <Link to="/freelancer">
                        <h2 className="text-xl font-semibold">
                          {freelancer.nome}
                        </h2>
                      </Link>
                      <h6 className="mt-2">Freelancer | {freelancer.area}</h6>
                    </div>
                    <Box>
                      <Text fontSize="xs">
                        <FaLocationArrow /> {freelancer.localizacao}
                      </Text>
                      <Text fontSize="xs">
                        <FaDotCircle className="text-green-800" /> Disponível
                        para contrato
                      </Text>
                    </Box>
                    <Box className="mt-2">
                      <Text fontSize="xs">Views {freelancer.views}</Text>
                    </Box>
                  </div>
                </div>
              </HStack>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button colorScheme="blackAlpha">Ver mais</Button>
        </div>
      </section>
    </>
  );
}

export default Freelancers;
