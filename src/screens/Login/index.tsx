// import { SubmitButton } from "@native-base/formik-ui";
import createValidator from "class-validator-formik";
import JWT from "expo-jwt";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Formik } from "formik";
import {
  Box,
  Center,
  FormControl,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "native-base";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
// import CryptoJS from "react-native-crypto-js";
import CryptoJS from 'crypto-js';
import Container from "../../components/Container";
import { Header } from "../../components/Header";
import { Database } from "../../database/Database";
import { process } from "../../env";
import { firestore } from "../../servers/firebase";
import { NavigationProps } from "../../types/navigation";
import { LoginDTO } from "../../validators/LoginDTO";

export const Login = ({ navigation }: NavigationProps) => {
  const onSubmit = async (values: LoginDTO, { resetForm, setErrors }: any) => {
    const { email, password } = values;
    let user = null;
    const q = query(
      collection(firestore, "Users"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      user = { ...data, id: doc.id };
    });
    if (user != null) {
      const decryptPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.SecretKey
      ).toString(CryptoJS.enc.Utf8);
      if (password === decryptPassword) {
        const database = new Database();
        const token = JWT.encode({ token: user.id }, process.env.SecretJWT);
        database.setItem("@Token", token);
        database.setItem("@name", user.name);
        database.setItem("@email", user.email);
        database.setItem("@quiz1", user.quiz1);
        database.setItem("@quiz2", user.quiz2);
        resetForm();
        if (user.quiz1) {
          navigation.navigate("Dashboard");
        } else {
          navigation.navigate("Quiz", {
            name: user.name,
            email: user.email,
            isLogin: true,
            isQuiz2: false,
          });
        }
      } else {
        setErrors({
          password: "Senha incorreta. Tente novamente",
        });
      }
    } else {
      setErrors({
        email: "E-mail não cadastrado",
      });
    }
  };

  return (
    <>
      <Container>
        <Header navigation={navigation} pag={"Small"} />
        <SafeAreaView style={styles.container}>
          <Center w="100%">
            <Box safeArea py="4" w="100%" marginBottom={8} maxW="345">
              <Center marginTop={1} marginBottom={5}>
                <Text bold color={"primary.100"} fontSize="5xl">
                  Login
                </Text>
              </Center>
              <Formik
                validate={createValidator(LoginDTO)}
                initialValues={{
                  email: "",
                  password: "",
                }}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={onSubmit}
              >
                {({
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <VStack space={4} mt="5">
                    <FormControl>
                      <Input
                        placeholder="Email"
                        placeholderTextColor={
                          errors.email && touched.email
                            ? "#ff2626"
                            : "#2b2a2a68"
                        }
                        style={{ fontSize: 17 }}
                        borderColor={
                          errors.email && touched.email ? "#ff2626" : "#FFFFFF"
                        }
                        height={"16"}
                        borderRadius={6}
                        shadow={"4"}
                        bgColor={"#FFFFFF"}
                        value={values.email}
                        onChangeText={handleChange("email")}
                      />
                      {errors.email && touched.email ? (
                        <Text color={"#ff2626"} fontSize="sm">
                          {errors.email}
                        </Text>
                      ) : null}
                    </FormControl>
                    <FormControl>
                      <Input
                        style={{ fontSize: 17 }}
                        placeholder="Senha"
                        placeholderTextColor={
                          errors.password && touched.password
                            ? "#ff2626"
                            : "#2b2a2a68"
                        }
                        height={"16"}
                        borderRadius={6}
                        shadow={"4"}
                        bgColor={"#FFFFFF"}
                        borderColor={
                          errors.email && touched.email ? "#ff2626" : "#FFFFFF"
                        }
                        type="password"
                        value={values.password}
                        onChangeText={handleChange("password")}
                      />
                      {errors.password && touched.password ? (
                        <Text color={"#ff2626"} fontSize="sm">
                          {errors.password}
                        </Text>
                      ) : null}
                    </FormControl>
                    {/* <SubmitButton height={"12"} size={"lg"} mt="90">
                      Entrar
                    </SubmitButton> */}
                    <HStack mt="6" justifyContent="center">
                      <Link
                        onPress={() => navigation.navigate("RedefinePassword")}
                        _text={{
                          color: "gray.400",
                          fontWeight: "medium",
                          fontSize: "lg",
                        }}
                        marginBottom={10}
                      >
                        Esqueceu a senha?
                      </Link>
                    </HStack>
                  </VStack>
                )}
              </Formik>
            </Box>
          </Center>
        </SafeAreaView>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: 400,
    height: 80,
  },
});
