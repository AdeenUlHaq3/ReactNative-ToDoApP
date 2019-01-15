import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/Login';

const AppNavigator = createStackNavigator({
  Login: LoginScreen,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
