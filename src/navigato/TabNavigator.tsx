import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Documents } from "../screens/Documents";
import { Home } from "../screens/Home";
import { Path } from "../screens/Path";
import { Path1 } from "../screens/Paths/Path1";
import { Path2 } from "../screens/Paths/Path2";
import { Path3 } from "../screens/Paths/Path3";
import { Path4 } from "../screens/Paths/Path4";
import { Path5 } from "../screens/Paths/Path5";
import { Path6 } from "../screens/Paths/Path6";
import { Quiz } from "../screens/Quiz";
import { Readings } from "../screens/Readings";
import { SocialMedia } from "../screens/SocialMedia";
import { Universe } from "../screens/Universe";
import { Guidance } from "../screens/Universes/Guidance";
import { Identity } from "../screens/Universes/Identity";
import { Name } from "../screens/Universes/Name";
import { Process } from "../screens/Universes/Process";
import { Reception } from "../screens/Universes/Reception";
import { Transfobia } from "../screens/Universes/Transfobia";
import { Transgenero } from "../screens/Universes/Transgenero";
import { References } from "../screens/References";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Path" component={Path} />
      <Tab.Screen name="SocialMedia" component={SocialMedia} />
      <Tab.Screen name="Documents" component={Documents} />
      <Tab.Screen name="Readings" component={Readings} />
      <Tab.Screen name="Universe" component={Universe} />
      <Tab.Screen name="Path1" component={Path1} />
      <Tab.Screen name="Path2" component={Path2} />
      <Tab.Screen name="Path3" component={Path3} />
      <Tab.Screen name="Path4" component={Path4} />
      <Tab.Screen name="Path5" component={Path5} />
      <Tab.Screen name="Path6" component={Path6} />
      <Tab.Screen name="Reception" component={Reception} />
      <Tab.Screen name="Identity" component={Identity} />
      <Tab.Screen name="Guidance" component={Guidance} />
      <Tab.Screen name="Transgenero" component={Transgenero} />
      <Tab.Screen name="Process" component={Process} />
      <Tab.Screen name="Transfobia" component={Transfobia} />
      <Tab.Screen name="Name" component={Name} />
      <Tab.Screen name="Quiz" component={Quiz} />
      <Tab.Screen name="References" component={References} />
    </Tab.Navigator>
  );
};
