import { Box, Button, Text } from "native-base";
import { ScrollView } from "react-native";
import { ContainerUniverse } from "../../components/ContainerUniverse";
import { Footer } from "../../components/Footer";
import { MenuHeader } from "../../components/MenuHeader";
import { NavigationProps } from "../../types/navigation";

export const Universe = ({ navigation }: NavigationProps) => {
  return (
    <>
      <MenuHeader navigation={navigation} />
      <ContainerUniverse>
        <ScrollView>
          <Box padding={4}>
            <Text color={"#FFFFFF"} fontSize="xl" textAlign={"center"} bold>
              {"Vamos conhecer mais sobre as definições de:"}
            </Text>
            <Button
              onPress={() => navigation.navigate("Reception")}
              colorScheme="cyan"
              marginTop={2}
              size={"lg"}
            >
              Acolhimento
            </Button>
            <Button
             onPress={() => navigation.navigate("Identity")}
             marginTop={4} size={"lg"}>
              Identidade de gênero
            </Button>
            <Button
              onPress={() => navigation.navigate("Guidance")}
              variant="subtle"
              colorScheme={"white"}
              marginTop={4}
              size={"lg"}
            >
              Orientação sexual
            </Button>
            <Button 
             onPress={() => navigation.navigate("Transgenero")}
            colorScheme="cyan" marginTop={4} size={"lg"}>
              Transexual, trangênero e travesti
            </Button>
            <Button
            onPress={() => navigation.navigate("Process")}
             marginTop={4} size={"lg"}>
              Processo transexualizador
            </Button>
            <Button
              onPress={() => navigation.navigate("Transfobia")}
              variant="subtle"
              colorScheme={"white"}
              marginTop={4}
              size={"lg"}
            >
              Transfobia
            </Button>
            <Button
             onPress={() => navigation.navigate("Name")}
             colorScheme="cyan" marginTop={4} size={"lg"}>
              Nome social
            </Button>
          </Box>
        </ScrollView>
      </ContainerUniverse>
      <Footer navigation={navigation} />
    </>
  );
};
