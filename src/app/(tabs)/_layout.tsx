import { Tabs } from "expo-router";
import { colors } from "@/styles/global";
import { Ionicons } from '@expo/vector-icons';
import HomeBase from "../components/HomeBase";
import Drawer from "expo-router/drawer";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

/** Configures the app's drawer navigation, screen labels, and icons. */
export default function TabLayout() {
    return (
        // This tabs object creates the tab island for all options to live on
        <Drawer
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: colors.primary,
                    height: 110,
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 30,
                },
                drawerStyle: {
                    backgroundColor: colors.primary,
                    width:250,                  
                },
                drawerActiveTintColor: colors.barActive,
                drawerInactiveTintColor: colors.secondary,
            }}
        >
            {/* This Tabs.screen component creates a home option for user to click on */}
            <Drawer.Screen
                name="index"
                options={{
                    title: 'Roll the Dice',
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            {/* This screen componet create the base games page */}
            <Drawer.Screen
                name="baseGames"
                options={{
                    title: 'Base Games',
                    drawerIcon: ({ color, size }) => ( 
                        <HomeBase size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="boardGames"
                options={{
                    title: 'Board Games',
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="chess-pawn" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="cardGames"
                options={{
                    title: 'Card Games',
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cards-playing" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="videoGames"
                options={{
                    title: 'Video Games',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="game-controller" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="addGame"
                options={{
                    title: 'Add a Game',
                    drawerIcon: ({ color, size }) => (
                        <AntDesign name="plus-circle" size={size} color={color} />
                    ),
                }}
            />
        </Drawer>
    );
}