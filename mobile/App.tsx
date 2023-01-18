import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins'
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting up mobile</Text>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242423',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f9f9fb',
    fontFamily: 'Poppins_600SemiBold'
  }
});
