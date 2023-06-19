import { Button, Text } from "native-base";
import Container from "../../components/Container";
import { Logo } from "../../components/Logo";
import { NavigationProps } from "../../types/navigation";

export const Small = ({ navigation }: NavigationProps) => {
  return (
    <>
      <Container>
        <Logo height={140} width={140} />
        <Text
          textAlign={"center"}
          fontWeight={"medium"}
          width={300}
          marginTop={8}
        >
          “Ensinar não é transferir conhecimento, mas criar possibilidades para
          a sua produção ou a sua construção. Quem ensina aprende ao ensinar e
          quem aprende ensina ao aprender”
          {"\n"}
          {"- Paulo Freire"}
        </Text>
        <Button
          onPress={() => navigation.navigate("Login")}
          width={"80"}
          size={"lg"}
          mt="100"
        >
          Login
        </Button>
        <Button
          onPress={() => navigation.navigate("Register")}
          width={"80"}
          size={"lg"}
          mt="2"
        >
          Cadastro
        </Button>
      </Container>
    </>
  );
};
