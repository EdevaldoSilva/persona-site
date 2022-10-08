/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/persona_logo.png";
import banner from "../../assets/banner.jpg";
import banner2 from "../../assets/banner2.jpg";
import pedido from "../../assets/pedido-template.jpg";
import bg from "../../assets/bg-teste.png";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.main_home}>
        <div className="w-1/3 h-56 mr-28 p-4 rounded-lg bg-white">
          <Stack spacing={4}>
            <Heading size="lg">Bem-vindo(a) a Persona</Heading>
            <Text fontSize="lg">
              Encontre novas inspirações e apresente seu trabalho. Temos as
              melhores soluções, escolhidas especialmente para você.
            </Text>
          </Stack>
        </div>
      </div>
    </>
    // Antigo
    // <div>
    //   {/* Hero */}
    //   <main
    //     // style={{ height: '31rem', backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    //     style={{ height: "31rem" }}
    //   >
    //     <div className="p-8 relative h-full gap-3 text-center text-white">
    //       <h1 className="my-4 py-4 text-4xl">Bem-vindo(a) a Persona</h1>
    //       <p className="my-4 py-4">
    //         Encontre novas inspirações e apresente seu trabalho. Temos as
    //         melhores soluções, escolhidas especialmente para você..
    //       </p>
    //       <div>
    //         <Button
    //           color="white"
    //           bgColor="gray.800"
    //           _hover={{ bgColor: "gray.600" }}
    //           size="lg"
    //         >
    //           Inscreva-se
    //         </Button>
    //       </div>
    //     </div>
    //   </main>

    //   {/* Basic Info */}
    //   <section className="mt-2 py-16 px-10 border-t">
    //     <div className="mx-auto max-w-6xl grid grid-flow-col gap-2">
    //       <div>
    //         <h1 className="text-4xl">Oferecemos as melhores infos</h1>
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    //           convallis nunc ac justo accumsan viverra. Nullam hendrerit maximus
    //           neque in.
    //         </p>
    //         <div>
    //           <Link to="about">
    //             <Button
    //               color="white"
    //               bgColor="gray.800"
    //               _hover={{ bgColor: "gray.600" }}
    //               size="lg"
    //             >
    //               Aprenda Sobre Nós
    //             </Button>
    //           </Link>
    //         </div>
    //       </div>
    //       <div>
    //         <img
    //           className="h-56 w-full rounded-md sm:h-72 md:h-96 lg:w-full lg:h-full"
    //           src={banner}
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //   </section>

    //   {/* Como Funciona */}
    //   <section className="mt-2 py-16 px-10 text-center align-middle">
    //     <div className="mx-auto max-w-6xl">
    //       <h1>Como Funciona</h1>
    //       <div className="flex flex-row gap-24">
    //         <div className="mt-6 p-3 bg-white text-black shadow-sm shadow-gray-400">
    //           <img
    //             className="h-30 w-30 object-cover inline-block mx-auto sm:h-72 md:h-96 lg:w-44 lg:h-44 rounded-full"
    //             src={banner}
    //             alt=""
    //           />
    //           <h3>Lorem</h3>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
    //             erat tempor, pulvinar velit ut, gravida libero. Donec placerat,
    //             nulla at semper iaculis, turpis quam commodo eros, et feugiat
    //             mauris urna nec leo
    //           </p>
    //         </div>

    //         <div className="mt-6 p-3 bg-white text-black shadow-sm shadow-gray-400">
    //           <img
    //             className="h-30 w-30 object-cover inline-block mx-auto sm:h-72 md:h-96 lg:w-44 lg:h-44 rounded-full"
    //             src={banner}
    //             alt=""
    //           />
    //           <h3>Lorem</h3>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
    //             erat tempor, pulvinar velit ut, gravida libero. Donec placerat,
    //             nulla at semper iaculis, turpis quam commodo eros, et feugiat
    //             mauris urna nec leo
    //           </p>
    //         </div>

    //         <div className="mt-6 p-3 bg-white text-black shadow-sm shadow-gray-400">
    //           <img
    //             className="h-30 w-30 object-cover inline-block mx-auto sm:h-72 md:h-96 lg:w-44 lg:h-44 rounded-full"
    //             src={banner}
    //             alt=""
    //           />
    //           <h3>Lorem</h3>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
    //             erat tempor, pulvinar velit ut, gravida libero. Donec placerat,
    //             nulla at semper iaculis, turpis quam commodo eros, et feugiat
    //             mauris urna nec leo
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Pedidos */}
    //   <section className="mt-2 py-16 px-10 text-center align-middle">
    //     <div className="mx-auto max-w-6xl">
    //       <h1>Faça um pedido</h1>
    //       <div className="mt-3 p-4 grid grid-cols-2 gap-4">
    //         <div className="mx-4 p-3 bg-white text-black flex flex-row gap-4 text-justify shadow-sm shadow-slate-300">
    //           <img
    //             className="h-30 w-30 object-cover rounded-lg sm:h-72 md:h-96 lg:w-44 lg:h-44"
    //             src={pedido}
    //             alt=""
    //           />
    //           <div>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    //               convallis nunc ac justo accumsan viverra. Nullam hendrerit
    //               maximus neque in.
    //             </p>
    //             <h3 className="my-2">
    //               Freelancer: <Link to="freelancer">Etna de Souza</Link>
    //             </h3>
    //             <Button colorScheme="blue">Ver Mais</Button>
    //           </div>
    //         </div>

    //         <div className="mx-4 p-3 bg-white text-black flex flex-row gap-4 text-justify shadow-sm shadow-slate-300">
    //           <img
    //             className="h-30 w-30 object-cover rounded-lg sm:h-72 md:h-96 lg:w-44 lg:h-44"
    //             src={pedido}
    //             alt=""
    //           />
    //           <div>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    //               convallis nunc ac justo accumsan viverra. Nullam hendrerit
    //               maximus neque in.
    //             </p>
    //             <h3 className="my-2">
    //               Freelancer: <Link to="freelancer">Etna de Souza</Link>
    //             </h3>
    //             <Button colorScheme="blue">Ver Mais</Button>
    //           </div>
    //         </div>

    //         <div className="mx-4 p-3 bg-white text-black flex flex-row gap-4 text-justify shadow-sm shadow-slate-300">
    //           <img
    //             className="h-30 w-30 object-cover rounded-lg sm:h-72 md:h-96 lg:w-44 lg:h-44"
    //             src={pedido}
    //             alt=""
    //           />
    //           <div>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    //               convallis nunc ac justo accumsan viverra. Nullam hendrerit
    //               maximus neque in.
    //             </p>
    //             <h3 className="my-2">
    //               Freelancer: <Link to="freelancer">Etna de Souza</Link>
    //             </h3>
    //             <Button colorScheme="blue">Ver Mais</Button>
    //           </div>
    //         </div>

    //         <div className="mx-4 p-3 bg-white text-black flex flex-row gap-4 text-justify shadow-sm shadow-slate-300">
    //           <img
    //             className="h-30 w-30 object-cover rounded-lg sm:h-72 md:h-96 lg:w-44 lg:h-44"
    //             src={pedido}
    //             alt=""
    //           />
    //           <div>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    //               convallis nunc ac justo accumsan viverra. Nullam hendrerit
    //               maximus neque in.
    //             </p>
    //             <h3 className="my-2">
    //               Freelancer: <Link to="freelancer">Etna de Souza</Link>
    //             </h3>
    //             <Button colorScheme="blue">Ver Mais</Button>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="mt-5">
    //         <Button
    //           color="white"
    //           bgColor="gray.800"
    //           _hover={{ bgColor: "gray.600" }}
    //           size="lg"
    //         >
    //           Inscreva-se
    //         </Button>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Home;
