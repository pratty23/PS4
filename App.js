import React, { useEffect, useState } from "react";
// import the components we want to use
import MusicRater from './components/MusicRater'
import InitialScreen from './components/InitialScreen'
import { StyleSheet, Text, View } from "react-native";


const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
        <Stack.Screen name="Home" component={InitialScreen} />
				<Stack.Screen name="Rating" component={MusicRater} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});