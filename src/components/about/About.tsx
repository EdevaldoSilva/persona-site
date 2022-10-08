import React from "react";
import { FaUser } from "react-icons/fa";
import banner2 from "../../assets/banner2.jpg";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.jpg";
import person5 from "../../assets/person5.jpg";
import person6 from "../../assets/person6.jpg";
import "../../App.css";
import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

function About() {
  return (
    <div>
      {/* Decricao inicial */}
      <section
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
        className="h-screen py-28 px-10 text-center bg-light-section"
      >
        <div className="mx-auto max-w-6xl align-middle text-white font-extrabold">
          <h1 className="text-4xl">
            Nos focamos em disponibilizar os melhores servicos
          </h1>
          <h1 className="text-3xl">
            para os nossos freelancers e igualmente os clientes.
          </h1>
        </div>
      </section>

      {/* O que somos */}
      <section className="mt-2 py-16 px-10 justify-start">
        <div className="mx-auto max-w-6xl">
          <Heading size="lg" marginBottom="0.75rem">
            O que é a PERSONA?
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            rutrum odio ipsum, mollis accumsan lacus luctus sit amet. Nullam
            consequat hendrerit velit, sit amet tempor enim varius nec. Fusce
            augue nibh, ultrices vitae vulputate non, porttitor eget velit. Sed
            scelerisque feugiat ante. Etiam rutrum posuere lacus. Duis quis
            felis luctus libero laoreet dapibus a ac sapien. Proin sagittis odio
            et pretium scelerisque. Suspendisse potenti. Curabitur fermentum
            cursus quam, quis tincidunt justo luctus ut. Proin euismod dapibus
            dignissim. In porta, ante sit amet aliquet blandit, enim nulla
            accumsan mauris, vitae efficitur orci lectus a orci. Sed urna
            tellus, rhoncus vitae auctor suscipit, ultricies ut nisl.
          </Text>
          <br />
          <Text>
            Duis vel dignissim sapien. Maecenas consequat tortor sit amet orci
            sollicitudin, at dignissim nibh malesuada. Praesent semper vulputate
            finibus. Integer iaculis risus sed ultricies maximus. Ut efficitur
            laoreet leo. Cras interdum sapien eget condimentum aliquet. Aliquam
            eget dui dictum, imperdiet est vel, aliquet sapien. Donec dictum
            erat non sem faucibus, at rhoncus ante luctus. Suspendisse ac
            laoreet magna. Aenean blandit arcu dictum, ornare enim at, tincidunt
            mauris. Curabitur metus ante, lobortis id nunc quis, euismod
            ultricies dui.
          </Text>
        </div>
      </section>

      {/* Os integrantes da compania */}
      <section
        style={{ color: "#EBF3F3" }}
        className="mt-2 py-16 px-10 text-white bg-dark-section border-y-2 rounded-sm"
      >
        <div className="mx-auto max-w-6xl text-gray-600">
          <Heading as="h1" size="xl" className="text-center">
            Estrutura Organica
          </Heading>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="mt-4">
              <HStack>
                <div className="flex">
                  <Box className="h-full shadow-2xl shadow-gray-500">
                    <Image
                      src={person1}
                      alt="Imagem 1"
                      objectFit="cover"
                      className="h-30 w-30 inline-block mx-auto sm:h-72 md:h-96 md:w-96 lg:w-44 lg:h-56 rounded-sm"
                    />
                  </Box>
                  <div className="p-4">
                    <div className="mb-4">
                      <Heading as="h3" size="md">
                        Jailson Coluna
                      </Heading>
                      <Heading as="h3" size="xs">
                        Director de TI
                      </Heading>
                    </div>
                    <Text>Texto de leve a explicar as ideias da pessoa</Text>
                  </div>
                </div>
              </HStack>
            </div>

            <div className="mt-4">
              <HStack>
                <div className="flex">
                  <Box className="h-full shadow-2xl shadow-gray-500">
                    <Image
                      src={person6}
                      alt="Imagem 1"
                      objectFit="cover"
                      className="h-30 w-30 inline-block mx-auto sm:h-72 md:h-96 md:w-96 lg:w-44 lg:h-56 rounded-sm"
                    />
                  </Box>
                  <div className="p-4">
                    <div className="mb-4">
                      <Heading as="h3" size="md">
                        Manuela Assunção
                      </Heading>
                      <Heading as="h3" size="xs">
                        Marketing
                      </Heading>
                    </div>
                    <Text>Texto de leve a explicar as ideias da pessoa</Text>
                  </div>
                </div>
              </HStack>
            </div>

            <div className="mt-4">
              <HStack>
                <div className="flex">
                  <Box className="h-full shadow-2xl shadow-gray-500">
                    <Image
                      src={person4}
                      alt="Imagem 1"
                      objectFit="cover"
                      className="h-30 w-30 inline-block mx-auto sm:h-72 md:h-96 md:w-96 lg:w-44 lg:h-56 rounded-sm"
                    />
                  </Box>
                  <div className="p-4">
                    <div className="mb-4">
                      <Heading as="h3" size="md">
                        Hannibal Lecter
                      </Heading>
                      <Heading as="h3" size="xs">
                        Psicólogo
                      </Heading>
                    </div>
                    <Text>Texto de leve a explicar as ideias da pessoa</Text>
                  </div>
                </div>
              </HStack>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
