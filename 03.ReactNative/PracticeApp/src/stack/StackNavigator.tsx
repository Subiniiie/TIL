import MainHomeScreen from "../screens/MainHomeScreen";
import MyPageScreen from "../screens/MyPageScreen"
import { navigations } from "../constants/navigations";
import { createStackNavigator } from "@react-navigation/stack";
import MyPage from "../screens/MyPageScreen";

export type StackParamList = {
    [navigations.MAINHOME]: undefined;
    [navigations.MYPAGE]: undefined;
}

const Stack = createStackNavigator<StackParamList>();


function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={navigations.MAINHOME}
                component={MainHomeScreen}
            />
            <Stack.Screen
                name={navigations.MYPAGE}
                component={MyPageScreen}
                options={{
                    headerTitle: ' ',
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;