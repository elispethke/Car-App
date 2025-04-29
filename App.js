import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, } from 'react-native';
import HeaderDetailScreen from './src/components/header/headerDetailScreen';


const App= () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <StatusBar style="dark" backgroundColor="#fff"/>
      <HeaderDetailScreen />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
         
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;