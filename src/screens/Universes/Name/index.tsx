import { Box, Center, Text } from "native-base";
import { Image, ScrollView } from "react-native";
import { ContainerUniverses } from "../../../components/ContainerUniverses";
import { Footer } from "../../../components/Footer";
import { MenuHeader } from "../../../components/MenuHeader";
import { NavigationProps } from "../../../types/navigation";
import { Back } from "../../../components/Back";

export const Name = ({ navigation }: NavigationProps) => {
  return (
    <>
      <ContainerUniverses>
      <Back navigation={navigation} pag="Universe" />
        <ScrollView>
          <Box padding={4}>
            <Text color={"#8ED9EF"} fontSize="3xl" textAlign={"center"} bold>
              {"NOME SOCIAL"}
            </Text>
            <Text textAlign={"justify"}>
              Nome social é o modo como a pessoa se autoidentifica e é
              reconhecida, identificada, chamada e denominada na sua comunidade
              e no meio social, uma vez que o seu nome civil, isto é, seu nome
              de registro não reflete a sua identidade de gênero.
            </Text>
            <Center marginTop={2}>
              <Image source={require(`./imgs/1.png`)} />
            </Center>
          </Box>
        </ScrollView>
      </ContainerUniverses>
      <Footer navigation={navigation} />
    </>
  );
};
