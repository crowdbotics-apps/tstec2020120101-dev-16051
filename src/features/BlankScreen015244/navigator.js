import { createStackNavigator } from "react-navigation-stack";

import Test from "./screens/test";

export default BlankBlueprintNavigator = createStackNavigator(
  {
    Test: { screen: Test }
  },
  {
    initialRouteName: "Test"
  }
);
