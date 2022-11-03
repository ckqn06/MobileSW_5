import { View, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>하이 헬로</Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})