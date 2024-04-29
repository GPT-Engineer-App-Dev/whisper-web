import { Box, VStack, HStack, Input, Button, Text, IconButton, useColorMode, useColorModeValue, Image, Avatar } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPaperPlane, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bgColor} minH="100vh" p={4}>
      <VStack spacing={4}>
        <HStack justifyContent="space-between" width="100%">
          <HStack spacing={4}>
            <Avatar icon={<FaUserCircle />} />
            <Text fontSize="2xl" fontWeight="bold" color={textColor}>
              ChatApp
            </Text>
          </HStack>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="outline" aria-label="Toggle color mode" />
        </HStack>
        <Box bg="white" w="100%" p={4} borderRadius="lg" boxShadow="base">
          <VStack spacing={4} align="stretch">
            <HStack spacing={4}>
              <Avatar size="sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNDM5NTQxMXww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Text fontSize="md" color={textColor}>
                John Doe: Hey, how are you?
              </Text>
            </HStack>
            <HStack spacing={4} justifyContent="flex-end">
              <Text fontSize="md" color={textColor}>
                You: I'm good, thanks! And you?
              </Text>
              <Avatar size="sm" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNDM5NTQxMXww&ixlib=rb-4.0.3&q=80&w=1080" />
            </HStack>
          </VStack>
        </Box>
        <HStack width="100%">
          <Input placeholder="Type a message..." />
          <IconButton icon={<FaPaperPlane />} variant="solid" colorScheme="blue" aria-label="Send message" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
