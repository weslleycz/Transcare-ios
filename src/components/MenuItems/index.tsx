import { Entypo } from "@expo/vector-icons";
import { Box, Button, Menu } from "native-base";
import React, { memo } from 'react';

type Props = {
  navigation: any;
};

const MenuItems = ({ navigation }: Props) => {
  return (
    <Box>
      <Menu.Item
        onPress={() => navigation.navigate("References")}
        style={{
          backgroundColor: "#ffffffbe",
        }}
      >
        <Box>
          <Button
            size={"lg"}
            variant="link"
            onPress={() => navigation.navigate("References")}
            leftIcon={
              <Entypo
                style={{ marginRight: 4 }}
                name="heart"
                size={30}
                colorScheme={"black"}
                color="#FDA3B5"
              />
            }
          >
            <Button
              style={{ marginRight: 4 }}
              size={"lg"}
              onPress={() => navigation.navigate("References")}
              variant="link"
              colorScheme={"black"}
            >
              Referências
            </Button>
          </Button>
        </Box>
      </Menu.Item>
      <Menu.Item
        onPress={() => navigation.navigate("Readings")}
        style={{
          backgroundColor: "#ffffff3b",
        }}
      >
        <Box>
          <Button
            onPress={() => navigation.navigate("Readings")}
            size={"lg"}
            colorScheme={"black"}
            leftIcon={
              <Entypo
                style={{ marginRight: 9 }}
                name="heart"
                size={30}
                color="#FDA3B5"
              />
            }
            variant="link"
          >
            Sugestões de leitura
          </Button>
        </Box>
      </Menu.Item>
      <Menu.Item
        onPress={() => navigation.navigate("Documents")}
        style={{
          backgroundColor: "#ffffffbe",
        }}
      >
        <Box>
          <Button
            onPress={() => navigation.navigate("Documents")}
            size={"lg"}
            leftIcon={
              <Entypo
                style={{ marginRight: 6, marginLeft: 10 }}
                name="heart"
                size={30}
                color="#FDA3B5"
              />
            }
            variant="link"
          >
            <Button
              onPress={() => navigation.navigate("Documents")}
              style={{ marginRight: 20 }}
              size={"lg"}
              variant="link"
              colorScheme={"black"}
            >
              Documentos ministeriais
            </Button>
          </Button>
        </Box>
      </Menu.Item>
    </Box>
  );
};

export default memo(MenuItems);