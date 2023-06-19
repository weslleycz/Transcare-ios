import { Image } from "react-native";

type Pros = {
  width: number;
  height: number;
};

export const Logo = ({ height, width }: Pros) => {
  return (
    <>
      <Image style={{width,height}} source={require("./icon.png")} />
    </>
  );
};
