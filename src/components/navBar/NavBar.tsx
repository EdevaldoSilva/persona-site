import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/persona_logo.png";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      py={{ base: 2 }}
      px={{ base: 4 }}
    >
      <Flex
        bg={useColorModeValue("transparent", "gray.800")}
        color={useColorModeValue("white", "white")}
        minH={"60px"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <AiOutlineClose width={5} height={5} />
              ) : (
                <FaBars width={5} height={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <ReactLink to="/">
            <Image
              src={logo}
              alt="Logo"
              className="h-4 w-14 inline-block md:h-8 md:w-24 lg:w-36 lg:h-12"
            />
          </ReactLink>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ReactLink to="/login">
            <Button
              as={"a"}
              color={"black"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
              _hover={{
                color: "gray.500",
                textDecoration: "none",
              }}
            >
              Entrar
            </Button>
          </ReactLink>
          <ReactLink to="/criar-conta">
            <Button
              color="white"
              bgColor="gray.800"
              _hover={{ bgColor: "gray.600" }}
              size="lg"
            >
              Inscreva-se
            </Button>
          </ReactLink>
        </Stack>
      </Flex>

      <Box display={{ base: "none", md: "flex" }} className="justify-center">
        <DesktopNav />
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("black", "gray.200");
  const linkHoverColor = useColorModeValue("black", "white");

  return (
    <Stack direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            as={ReactLink}
            to={`/${navItem.href}`}
            p={1}
            fontSize={"sm"}
            color={linkColor}
            _hover={{
              borderTop: "2px solid gray",
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Marketplace",
    href: "",
  },
  {
    label: "Projetos",
    href: "",
  },
  {
    label: "Negócio",
    href: "",
  },
  {
    label: "Portfolio",
    href: "",
  },
  {
    label: "Produto",
    href: "",
  },
  {
    label: "Soluções",
    href: "",
  },
  {
    label: "Freelancers",
    href: "freelancers",
  },
  {
    label: "Sobre Nós",
    href: "about",
  },
];
