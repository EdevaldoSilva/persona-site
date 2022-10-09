import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="main_login text-white">
      <VStack className="max-w-md w-full" spacing={4}>
        <Heading size="md" as="h1">
          Ainda não tem uma conta?{" "}
          <Link to="/criar-conta">
            <span className="hover:text-green-800 transition-all duration-500">
              Crie Aqui
            </span>
          </Link>
        </Heading>
        <Input
          bgColor="rgba(0, 0, 0, 0.3)"
          focusBorderColor="white"
          placeholder="Username"
        />
        <InputGroup size="md">
          <Input
            bgColor="rgba(0, 0, 0, 0.3)"
            focusBorderColor="white"
            placeholder="Password"
            type={show ? "text" : "password"}
          />
          <InputRightElement className="mr-2">
            <Button
              bgColor="rgba(0, 0, 0, 0.3)"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              _hover={{
                bgColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button className="w-full" colorScheme="teal">
          Entrar
        </Button>
        <Text className="font-semibold" w="100%" textAlign="right" size="xs">
          Esqueceu-se da Password?
        </Text>
        <Text className="font-semibold">-Ou Entre com-</Text>
        <HStack spacing={2}>
          <Button colorScheme="orange" leftIcon={<FaGoogle />}>
            Google
          </Button>
          <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
            Facebook
          </Button>
        </HStack>
      </VStack>
      {/* <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Palavra-Passe"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaLock
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default Login;
