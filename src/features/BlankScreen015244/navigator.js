import { createStackNavigator } from "react-navigation-stack";

import Test from "./screens/";

export default BlankBlueprintNavigator = createStackNavigator(
  {
    Test: { screen: Test }
  },
  {
    initialRouteName: "Test"
  }
);
