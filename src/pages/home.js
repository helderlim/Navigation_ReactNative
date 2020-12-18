import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      
      {/*NAVEGAÇÃO ATRAVES DO NAME DO ROUTES.JS*/}
      <Button
      title= "go to hello"
      onPress={ () =>{ props.navigation.navigate('Hello')}}
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
