import { Box, Center, HStack, Link, Text } from "native-base";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import Container from "../../components/Container";
import { FooterPink } from "../../components/FooterPink";
import { MenuHeader } from "../../components/MenuHeader";
import { NavigationProps } from "../../types/navigation";

export const SocialMedia = ({ navigation }: NavigationProps) => {
  return (
    <>
      <MenuHeader navigation={navigation} />
      <Container>
        <ScrollView>
          <Box padding={4}>
            <Center>
              <Text
                marginTop={2}
                color={"#FF66C4"}
                width={"250"}
                fontSize="2xl"
                textAlign={"center"}
                bold
              >
                {"Nos acompanhe nas nossas redes sociais"}
              </Text>
            </Center>

            <Box marginTop={12} marginBottom={12}>
              <HStack marginBottom={2} justifyContent={"flex-start"}>
                <TouchableOpacity activeOpacity={0.5}>
                  <Link href="https://www.youtube.com/channel/UCJvYAzFOh9BEP5gt6SB4CmA" isExternal>
                    <Box marginRight={2}>
                      <Image source={require(`./imgs/youtube.png`)} />
                    </Box>
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                  <Link href="https://www.instagram.com/laticsufcg/" isExternal>
                    <Box marginRight={2}>
                      <Image source={require(`./imgs/Instagram.png`)} />
                    </Box>
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                  <Link href="https://www.facebook.com/laticsufcg" isExternal>
                    <Box marginRight={3}>
                      <Image source={require(`./imgs/Facebook.png`)} />
                    </Box>
                  </Link>
                </TouchableOpacity>
              </HStack>
              <TouchableOpacity activeOpacity={0.5}>
                <Link href="http://laticsufcg.blogspot.com/" isExternal>
                  <Image source={require(`./imgs/Blogger.png`)} />
                </Link>
              </TouchableOpacity>
            </Box>
            <Center>
              <Image source={require(`./imgs/logo.png`)} />
            </Center>
          </Box>
        </ScrollView>
      </Container>
      <FooterPink navigation={navigation} />
    </>
  );
};
