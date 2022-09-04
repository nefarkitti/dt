import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import { WebView } from 'react-native-webview'
//import fs from 'react-native-fs'
import * as FileSystem from 'expo-file-system';

const MyHTML = require("./public/index.html");

/*
function root(dir = '/public/') {
  var path = Platform.OS === "android"
      ? fs.DocumentDirectoryPath
      : fs.MainBundlePath
  return path + dir
}*/
function root(dir = '/public/') {
  var path = FileSystem.documentDirectory
  return path + dir
}
//documentDirectory
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
/*
<WebView
      
      source={MyHTML}
      originWhitelist={['*']}
      decelerationRate="fast"
      
      allowFileAccessFromFileURLs
      allowUniversalAccessFromFileURLs
      allowingReadAccessToURL={"file://" + root()}
      
      />
*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>ok</Text>
      <StatusBar style="auto" />
    </View>
  );
}
console.log("joe")