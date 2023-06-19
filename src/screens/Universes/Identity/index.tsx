import { Box, Center, Text } from "native-base";
import { Image, ScrollView } from "react-native";
import { ContainerUniverses } from "../../../components/ContainerUniverses";
import { Footer } from "../../../components/Footer";
import { NavigationProps } from "../../../types/navigation";
import { Back } from "../../../components/Back";

export const Identity = ({ navigation }: NavigationProps) => {
  return (
    <>
      <ContainerUniverses>
      <Back navigation={navigation} pag="Universe" />
        <ScrollView>
          <Box padding={4}>
            <Text color={"#8ED9EF"} fontSize="3xl" textAlign={"center"} bold>
              {"IDENTIDADE DE GÊNERO"}
            </Text>
            <Text textAlign={"justify"}>
              Sendo uma experiência particular que cada indivíduo possui acerca
              do sexo que foi atribuído em seu nascimento, a identidade de
              gênero diz respeito à percepção pessoal desse ser sobre seu gênero
              ser masculino, feminino ou ambos.
            </Text>
            <Center marginTop={3}>
              <Image source={require(`./imgs/pessoas.png`)} />
            </Center>
          </Box>
        </ScrollView>
      </ContainerUniverses>
      <Footer navigation={navigation} />
    </>
  );
};
