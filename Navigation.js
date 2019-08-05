import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
import Result from './Result'
import Camera from './camera';


const route = createStackNavigator({
    Home: HomeScreen,
    Result: Result,
    Camera: Camera
    }, {
        initialRouteName: 'Home'
    }
)

export default Routes = createAppContainer(route)