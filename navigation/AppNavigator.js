import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

const AppNavigator = createStackNavigator({
  Login: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;