import MainHomeScreen from "../screens/MainHomeScreen";
import { navigations } from "../constants/navigations";
import { createStackNavigator } from "@react-navigation/stack";

export type StackParamList = {
    [navigations.MAINHOME]: undefined;
}

const Stack = createStackNavigator<StackParamList>();


function RootNavigator() {
    return (
        <>
            
        </>
    )
}