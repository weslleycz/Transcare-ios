import { Box, Center, Text } from "native-base";
import { Image, ScrollView } from "react-native";
import { ContainerUniverses } from "../../../components/ContainerUniverses";
import { Footer } from "../../../components/Footer";
import { MenuHeader } from "../../../components/MenuHeader";
import { NavigationProps } from "../../../types/navigation";
import { Back } from "../../../components/Back";

export const Transfobia = ({ navigation }: NavigationProps) => {
  return (
    <>
      <ContainerUniverses>
      <Back navigation={navigation} pag="Universe" />
        <ScrollView>
          <Box padding={4}>
            <Text color={"#8ED9EF"} fontSize="3xl" textAlign={"center"} bold>
              {"TRANSFOBIA"}
            </Text>
            <Text textAlign={"justify"}>
              Caracteriza-se como a aversão sentida por alguns indivíduos contra
              as pessoas trans.
            </Text>
            <Center marginTop={2}>
              <Image source={require(`./imgs/1.png`)} />
            </Center>
            <Text marginTop={5} textAlign={"justify"}>
              É uma violência generalizada, estrutural e cultural que perpassa
              pela escola, família, instituições religiosas e chega a interferir
              na qualidade dos serviços prestados à população trans, seja de
              educação, saúde ou segurança pública.
            </Text>
          </Box>
        </ScrollView>
      </ContainerUniverses>
      <Footer navigation={navigation} />
    </>
  );
};
