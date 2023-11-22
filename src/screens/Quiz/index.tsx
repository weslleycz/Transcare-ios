import { Entypo } from "@expo/vector-icons";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { Box, Button, Heading, Text } from "native-base";
import { useState } from "react";
import { Image } from "react-native";
import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";
import uuid from "react-native-uuid";
import { Database } from "../../database/Database";
import { firestore } from "../../servers/firebase";
import { NavigationProps } from "../../types/navigation";
import { questions } from "./questions";

type IResult = {
  answer: string;
  isRight: boolean;
  question: string;
  response: string;
  isLogin?: boolean;
  isQuiz2?: boolean;
};

export const Quiz = ({ route, navigation }: NavigationProps) => {
  const [inQuiz, setInQuiz] = useState("welcome");
  const [total, setTotal] = useState(0);
  const { email, name, isQuiz2, isLogin } = route.params;
  const [isComplete, setIsComplete] = useState(false);
  const [isActivated, setIsActivated] = useState("flex");

  const shuffleObject = (obj: any) => {
    const propertyValues = Object.values(obj);
    const valuesRandom = propertyValues.sort(() => Math.random() - 0.5);
    return {
      optionA: valuesRandom[0],
      optionB: valuesRandom[1],
      optionC: valuesRandom[2],
      optionD: valuesRandom[3],
    };
  };

  return inQuiz === "welcome" ? (
    <>
      <Box  resizeMode="cover">
        <Box>
          <Box top={2} marginLeft={20}>
            <Image source={require(`./imgs/Logo.png`)} />
          </Box>
          <Box
            borderRadius={9}
            marginLeft={5}
            marginRight={5}
            marginBottom={5}
            padding={5}
            bgColor={"#ffff"}
            alignItems="center"
            height={"full"}
          >

            <Text textAlign={"center"} color={"#F57EB6"} bold fontSize="lg">
              Teste seus conhecimentos sobre o acolhimento à pessoa trans.
            </Text>
            <Box marginTop={3} width={330} textAlign={"left"}>
              <Heading color={"#F57EB6"} bold size="md">
                Sobre o Quiz:
              </Heading>
            </Box>
            <Text textAlign={"left"} color={"#F57EB6"} bold fontSize="lg">
              <Entypo
                name="controller-record"
                style={{ color: "#F57EB6" }}
                size={20}
                color="black"
              />
              <Text color={"#F57EB6"} bold fontSize="lg">
                {`   Composto por 15 perguntas.    `}
              </Text>
            </Text>
            <Text textAlign={"left"} color={"#F57EB6"} bold fontSize="lg">
              <Entypo
                name="controller-record"
                style={{ color: "#F57EB6" }}
                size={20}
                color="black"
              />
              <Text color={"#F57EB6"} bold fontSize="lg">
                {`   Cada pergunta tem quatro alternativas e apenas uma correta.`}
              </Text>
            </Text>
            <Button
              width={"64"}
              colorScheme={"cyan"}
              size="lg"
              marginTop={20}
              borderRadius={12}
              onPress={() => setInQuiz("quiz")}
            >
              <Text fontSize="xl" bold>
                Vamos começar!
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  ) : inQuiz === "quiz" ? (
    <Box>
      <Box height={"full"} style={{ padding: 7 }}>
        <QuizeSingleChoice
          containerStyle={{ backgroundColor: "#ff00000" }}
          questionTitleStyle={{ fontSize: 22, color: "#5BCCE4" }}
          responseStyle={{
            borderRadius: 12,
            backgroundColor: "#61dafb",
          }}
          responseTextStyle={{
            fontSize: 13,
            fontWeight: "normal",
            textTransform: "none",
          }}
          selectedResponseStyle={{
            borderRadius: 12,
            backgroundColor: "#FDA3B5",
          }}
          selectedResponseTextStyle={{
            fontSize: 13,
            fontWeight: "normal",
            textTransform: "none",
          }}
          responseRequired={true}
          nextButtonText={"Próximo"}
          nextButtonStyle={{ backgroundColor: "#00c8ff" }}
          nextButtonTextStyle={{ color: "#FFF" }}
          prevButtonText={"Anterior"}
          prevButtonStyle={{ backgroundColor: "#FDA3B5" }}
          prevButtonTextStyle={{ color: "#FFF" }}
          endButtonText={"Finalizar"}
          endButtonStyle={{ backgroundColor: "#92f560", display: isActivated }}
          endButtonTextStyle={{ color: "#FFF" }}
          buttonsContainerStyle={{ marginTop: "auto" }}
          onEnd={async (results: IResult[]) => {
            if (isComplete === false) {
              setIsComplete(true);
              setIsActivated("none");
              const database = new Database();
              const id = uuid.v4().toString();
              let subTotal = 0;
              results.map((result) => {
                if (result.isRight) {
                  subTotal++;
                }
              });
              let user = {};
              const q = query(
                collection(firestore, "Users"),
                where("email", "==", email)
              );
              const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {
                const data = doc.data();
                user = { ...data, id: doc.id };
              });

              if (isLogin) {
                await setDoc(doc(firestore, "Users", user.id), {
                  ...user,
                  quiz1: true,
                });
              } else {
                if (isQuiz2) {
                  await setDoc(doc(firestore, "Users", user.id), {
                    ...user,
                    quiz2: true,
                  });
                  database.setItem("@quiz2", true);
                } else {
                  await setDoc(doc(firestore, "Users", user.id), {
                    ...user,
                    quiz1: true,
                  });
                }
              }
              if (isLogin) {
                if (user.quiz1 === false) {
                  await setDoc(doc(firestore, "Quizur", id), {
                    idUser: user.id,
                    name: name,
                    email: email,
                    id,
                    results,
                    quiz: "1°",
                  });
                }
              } else {
                console.log(isLogin);
                
                await setDoc(doc(firestore, "Quizur", id), {
                  idUser: user.id,
                  name: name,
                  email: email,
                  id,
                  results,
                  quiz: "2°",
                });
              }
              setInQuiz("complete");
              setTotal(subTotal);
              if (typeof isLogin != "undefined") {
                database.setItem("@quiz1", true);
              }
            }
          }}
          data={questions.map((item, index) => {
            const { optionA, optionB, optionC, optionD, question, answer } =
              item;
            const options = shuffleObject({
              optionA,
              optionB,
              optionC,
              optionD,
            });
            return { ...options, question, answer };
          })}
        />
      </Box>
    </Box>
  ) : (
    <>
      <Box>
        <Box style={{ height: "100%" }} alignItems="center">
          <Box top={2}>
            {total === questions.length ? (
              <Image source={require(`./imgs/Parabens.png`)} />
            ) : null}
            {total === 0 ? <Image source={require(`./imgs/Nao.png`)} /> : null}
            {total < questions.length && total != 0 ? (
              <Image source={require(`./imgs/Quase.png`)} />
            ) : null}
          </Box>
          <Box
            borderRadius={9}
            marginLeft={5}
            marginRight={5}
            marginBottom={5}
            padding={5}
            bgColor={"#ffff"}
            alignItems="center"
            height={"full"}
          >
            <Text textAlign={"center"} color={"#5BCCE4"} bold fontSize="lg">
              {total != 0
                ? `Você conseguiu acertar ${total} questões.`
                : "Você não conseguiu acertar as questões!"}
            </Text>
            <Text
              marginTop={10}
              textAlign={"left"}
              color={"#5BCCE4"}
              bold
              fontSize="lg"
            >
              <Text color={"#5BCCE4"} bold fontSize="lg">
                {`Continue usando o aplicativo. Aprenda mais sobre a saúde e o acolhimento a pessoa trans. `}
              </Text>
            </Text>
            {isQuiz2 ? (
              <Button
                width={"64"}
                colorScheme={"cyan"}
                size="lg"
                marginTop={20}
                borderRadius={12}
                onPress={() => navigation.navigate("Home")}
              >
                <Text fontSize="xl" bold>
                  Entrar no aplicativo
                </Text>
              </Button>
            ) : typeof isLogin === "undefined" ? (
              <Button
                width={"64"}
                colorScheme={"cyan"}
                size="lg"
                marginTop={20}
                borderRadius={12}
                onPress={() => navigation.navigate("Login")}
              >
                <Text fontSize="xl" bold>
                  Entrar no aplicativo
                </Text>
              </Button>
            ) : (
              <>
                <Button
                  width={"64"}
                  colorScheme={"cyan"}
                  size="lg"
                  marginTop={20}
                  borderRadius={12}
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text fontSize="xl" bold>
                    Entrar no aplicativo
                  </Text>
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};
