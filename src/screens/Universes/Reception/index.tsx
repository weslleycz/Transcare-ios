import { Box, Center, Text } from "native-base";
import { Image, ScrollView } from "react-native";
import { Back } from "../../../components/Back";
import { ContainerUniverses } from "../../../components/ContainerUniverses";
import { Footer } from "../../../components/Footer";
import { NavigationProps } from "../../../types/navigation";

export const Reception = ({ navigation }: NavigationProps) => {
  return (
    <>
      <ContainerUniverses>
        <Back navigation={navigation} pag="Universe" />
        <ScrollView>
          <Box padding={4}>
            <Text color={"#8ED9EF"} fontSize="3xl" textAlign={"center"} bold>
              {"ACOLHIMENTO"}
            </Text>
            <Text color={"#3FB2AF"} fontSize="xl" textAlign={"center"} bold>
              {"Como acolher uma pessoa trans?"}
            </Text>
            {/* <Center>
              <Image source={require(`./imgs/Revisao.png`)} />
            </Center> */}
            <Text textAlign={"justify"}>
              Acolher vai muito além de apenas recepcionar a pessoa trans, por
              isso, no acolhimento deve haver um compromisso coletivo de
              cultivar vínculos, considerando as diferenças entre os atores
              envolvidos nesse processo. buscando construir um vínculo
              estruturado com respeito e empatia, proporcionando dessa maneira,
              um espaço acolhedor e confortável para ambas as partes.
            </Text>
            <Box marginTop={5} bgColor={"#F8B0D6"} padding={4}>
              Ouvi-los e compreender suas angustias, limitações e
              singularidades;
            </Box>
            <Box marginTop={5} bgColor={"#C6E1EF"} padding={4}>
              Proporcionar conforto e segurança à pessoa ali presente;
            </Box>
            <Box marginTop={5} bgColor={"#FED7EB"} padding={4}>
              Construir um vínculo estruturado com respeito e empatia;
            </Box>
            <Text marginTop={5} textAlign={"justify"}>
              Acolher vai muito além de apenas recepcionar a pessoa trans, por
              isso, no acolhimento deve haver um compromisso coletivo de
              cultivar vínculos, considerando as diferenças entre os atores
              envolvidos nesse processo. buscando construir um vínculo
              estruturado com respeito e empatia, proporcionando dessa maneira,
              um espaço acolhedor e confortável para ambas as partes.
            </Text>
            <Center marginTop={2}>
              <Image source={require(`./imgs/pessoas.png`)} />
            </Center>
          </Box>
        </ScrollView>
      </ContainerUniverses>
      <Footer navigation={navigation} />
    </>
  );
};
