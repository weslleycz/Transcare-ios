import { Entypo } from "@expo/vector-icons";
import { Box, Button, Menu, Modal, ScrollView, Text } from "native-base";
import { useState } from "react";
import { Database } from "../../database/Database";
import { NavigationProps } from "../../types/navigation";

type Props = {
  navigation: NavigationProps;
};

export const ModalQuiz = ({ navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [size, setSize] = useState("xl");
  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };

  const handleQuiz = async () => {
    const database = new Database();
    const name = await database.getItem("@name");
    const email = await database.getItem("@email");
    navigation.navigate("Quiz", {
      name: name,
      email: email,
      isQuiz2: true,
    });
  };

  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        size={size}
      >
        <Modal.Content maxH="212">
          <Modal.CloseButton color={"red"} />
          <Modal.Header>Atenção</Modal.Header>
          <Modal.Body>
            <ScrollView>
              <Text>
                Declaro para os devidos fins ter utilizado de todas as
                ferramentas disponíveis no aplicativo e concluido a leitura de
                todas as informações dispostas no mesmo. Me responsabilizo pela
                realização da segunda etapa desta pesquisa, de modo a responder
                o quiz a seguir:
              </Text>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Discordo
              </Button>
              <Button onPress={() => handleQuiz()}>Concordo</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Menu.Item
        style={{
          backgroundColor: "#ffffffbe",
        }}
        onPress={() => handleSizeClick(size)}
      >
        <Box>
          <Button
            size={"lg"}
            onPress={() => handleSizeClick(size)}
            leftIcon={
              <Entypo
                style={{ marginRight: 6, marginLeft: 10 }}
                name="heart"
                size={30}
                color="#FDA3B5"
                onPress={() => console.log(1234)}
              />
            }
            variant="link"
          >
            <Button
              onPress={() => handleSizeClick(size)}
              style={{ marginRight: 20 }}
              size={"lg"}
              variant="link"
              colorScheme={"black"}
            >
              Quiz final
            </Button>
          </Button>
        </Box>
      </Menu.Item>
    </>
  );
};
