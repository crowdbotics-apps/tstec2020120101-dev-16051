import { createStackNavigator } from "react-navigation-stack";

import Blank from "./screens/test";

export default BlankBlueprintNavigator = createStackNavigator(
  {
    Test: { screen: Test }
  },
  {
    initialRouteName: "Test"
  }
);
