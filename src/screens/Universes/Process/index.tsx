import { Box, Center, Text } from "native-base";
import { Image, ScrollView } from "react-native";
import { Back } from "../../../components/Back";
import { ContainerUniverses } from "../../../components/ContainerUniverses";
import { Footer } from "../../../components/Footer";
import { NavigationProps } from "../../../types/navigation";

export const Process = ({ navigation }: NavigationProps) => {
  return (
    <>
      <ContainerUniverses>
        <Back navigation={navigation} pag="Universe" />
        <ScrollView>
          <Box padding={4}>
            <Text color={"#8ED9EF"} fontSize="3xl" textAlign={"center"} bold>
              {"PROCESSO"}
            </Text>
            <Text color={"#3FB2AF"} fontSize="xl" textAlign={"center"} bold>
              {"Transexualizador"}
            </Text>
            <Center marginTop={5}>
              <Image source={require(`./imgs/1.png`)} />
            </Center>
            <Text marginTop={5} textAlign={"justify"}>
              Adequação do corpo do indivíduo ao gênero ao qual se identifica,
              podendo ser por procedimentos cirúrgicos ou medicamentoso.
              Disponibilizando de uma equipe multiprofissional para a melhor
              adequação da transição, tanto na Atenção Básica como na
              especializada.
            </Text>
            <Text color={"#FF83A8"} fontSize="xl" textAlign={"center"} bold>
              {"Procedimento cirúrgico"}
            </Text>
            <Text marginTop={5} textAlign={"justify"}>
              Procedimentos realizados por profissionais de saúde, no qual
              utiliza de técnicas invasivas para a mudança corporal, definitiva
              ou não, do indivíduo ao qual deseja transformar o seu corpo para o
              sexo em que se identifica. Inclui:
            </Text>
            <Center marginTop={5}>
              <Image source={require(`./imgs/2.png`)} />
            </Center>
            <Text
              marginTop={3}
              color={"#FF83A8"}
              fontSize="xl"
              textAlign={"center"}
              bold
            >
              {"Procedimento hormonal"}
            </Text>
            <Text marginTop={5} textAlign={"justify"}>
              Terapia com uso de medicamento hormonais, como o estrogênio,
              antiandrogênicos (inibidor das características masculinas), para
              obtenção das características sexuais segundarias desejadas. Esse
              tipo de tratamento requer que o indivíduo realize exames,
              periodicamente, para a análise dos níveis de hormônio, ao qual
              está tomando, para avaliar sua saúde e possíveis efeitos
              colaterais que possam ocorrer. Inclui:
            </Text>
            <Center marginTop={5}>
              <Image source={require(`./imgs/3.png`)} />
            </Center>
          </Box>
        </ScrollView>
      </ContainerUniverses>
      <Footer navigation={navigation} />
    </>
  );
};
