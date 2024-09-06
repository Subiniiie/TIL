import MainHomeScreen from "../screens/MainHomeScreen";
import MyPageScreen from "../screens/MyPageScreen";
import MyReviewScreen from "../screens/MyReviewScreen";
import UpdateProfileScreen from "../screens/UpdateProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RecommendScreen from "../screens/RecommendScreen";
import SearchScreen from "../screens/SearchScreen";
import WishLIstScreen from "../screens/WishLIstScreen";
import { navigations } from "../constants/navigations";
import { createStackNavigator } from "@react-navigation/stack";

export type StackParamList = {
    [navigations.MAINHOME]: undefined;
    [navigations.MYPAGE]: undefined;
    [navigations.MYREVIEW]: undefined;
    [navigations.UPDATEPROFILE]: undefined;
    [navigations.HOME] : undefined;
    [navigations.PROFILE] : undefined;
    [navigations.RECOMMEND] : undefined;
    [navigations.SEARCH] : undefined;
    [navigations.WISHLIST] : undefined;
}

const Stack = createStackNavigator<StackParamList>();


function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={navigations.MAINHOME}
                component={MainHomeScreen}
                options={{
                    headerTitle: ' ',
                }}
            />
            <Stack.Screen
                name={navigations.MYPAGE}
                component={MyPageScreen}
                options={{
                    headerTitle: ' ',
                }}
            />
            <Stack.Screen
                name={navigations.MYREVIEW}
                component={MyReviewScreen}
                options={{
                    headerTitle: ' ',
                }}
            />
            <Stack.Screen 
                name={navigations.UPDATEPROFILE}
                component={UpdateProfileScreen}
                options={{
                    headerTitle: ' ',
                }}
            />
            <Stack.Screen 
                name={navigations.HOME}
                component={HomeScreen}
                options={{
                    headerTitle: ' ',
                }}
            />
            <Stack.Screen 
                name={navigations.PROFILE}
                component={ProfileScreen}
                options={{
                    headerTitle: ' ',
                }}
            />
            <Stack.Screen 
                name={navigations.RECOMMEND}
                component={RecommendScreen}
                options={{
                    headerTitle: ' ',
                }}
            />
            <Stack.Screen 
                name={navigations.SEARCH}
                component={SearchScreen}
                options={{
                    headerTitle: ' ',
                }}
            />
            <Stack.Screen 
                name={navigations.WISHLIST}
                component={WishLIstScreen}
                options={{
                    headerTitle: ' ',
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;