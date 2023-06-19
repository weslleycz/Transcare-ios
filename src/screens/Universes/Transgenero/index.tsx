import { Box, Center, Text } from "native-base";
import { Image, ScrollView } from "react-native";
import { ContainerUniverses } from "../../../components/ContainerUniverses";
import { Footer } from "../../../components/Footer";
import { MenuHeader } from "../../../components/MenuHeader";
import { NavigationProps } from "../../../types/navigation";
import { Back } from "../../../components/Back";

export const Transgenero = ({ navigation }: NavigationProps) => {
  return (
    <>
      <ContainerUniverses>
      <Back navigation={navigation} pag="Universe" />
        <ScrollView>
          <Box padding={4}>
            <Text color={"#8ED9EF"} fontSize="3xl" textAlign={"center"} bold>
              {"TRANSGÊNERO"}
            </Text>
            <Text color={"#3FB2AF"} fontSize="xl" textAlign={"center"} bold>
              {"Transexual e travesti"}
            </Text>
            <Center marginTop={2}>
              <Image source={require(`./imgs/1.png`)} />
            </Center>
            <Text color={"#FF83A8"} fontSize="xl" textAlign={"center"} bold>
              {"Transgênero"}
            </Text>
            <Text textAlign={"justify"}>
              São aquelas que de modo geral, se identificam com outro gênero que
              não corresponde necessariamente ao seu sexo biológico, não havendo
              obrigatoriamente, procedimentos cirúrgicos, químicos ou estéticos;
            </Text>
            <Text color={"#FF83A8"} fontSize="xl" textAlign={"center"} bold>
              {"Transexual"}
            </Text>
            <Text textAlign={"justify"}>
              Pessoas que possuem uma identidade de gênero contraria ao sexo
              biológico do nascimento, que procuram por meio cirúrgico, estético
              ou hormonal se adequar a identidade a qual se identificam;
            </Text>
            <Text color={"#FF83A8"} fontSize="xl" textAlign={"center"} bold>
              {"Travesti"}
            </Text>
            <Text textAlign={"justify"}>
              Pessoa que adota a maneira de se vestir, os hábitos sociais e os
              comportamentos usuais do gênero oposto, onde a travesti utiliza de
              vestimentas e acessórios com a finalidade de expressar o gênero
              feminino;
            </Text>
          </Box>
        </ScrollView>
      </ContainerUniverses>
      <Footer navigation={navigation} />
    </>
  );
};
