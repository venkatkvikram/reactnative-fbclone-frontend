import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  extendTheme,
} from 'native-base';

const CardComponent = () => {
  const theme = extendTheme({
    components: {
      backgroundColor: "blue",
    }
  });
  return (
    <Box p="8" flex="1" maxW="500" w="1000%" style={theme.components}>
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://st1.latestly.com/wp-content/uploads/2022/12/Lionel-Messi-1-2.jpg',
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5">
            NEWS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Argentina! The New FIFA World Cup Champions.
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              3rd FIFA title for Argentina.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Argentina defeated France on December 18 in the final of the FIFA
            World Cup 2022 at the Lusail Stadium, as they lifted their third
            FIFA World Cup trophy, and their first since Diego Maradona's
            elusive win in 1986 that the country was the recipient of
            international football's top prize. In fact, it was a special moment
            for Lionel Messi as he tasted success for the first time in the FIFA
            World Cup is what was his last game at the mega tournament.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <CardComponent />
      </Center>
    </NativeBaseProvider>
  );
};
