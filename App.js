import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  createNativeStackNavigator,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
