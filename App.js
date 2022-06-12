import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, View, Text, SafeAreaView, SafeAreaViewComponent} from 'react-native';
import LoginForm from "./Components/LoginForm";
import LoginFooter from "./Components/LoginFooter";
import Header from "./Components/Header";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
      <LoginForm />
      <LoginFooter />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      marginTop:44,
    backgroundColor: '#fff',
  },
});
