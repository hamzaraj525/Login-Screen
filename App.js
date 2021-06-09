import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {
  SafeAreaView,
  Alert,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Login" />
      </Appbar.Header>

      <View style={styles.container}>
        <Text style={styles.heading}>Login Screen</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
        />
        <View
          style={[
            {
              width: '100%',
              alignItems: 'center',
              marginTop: 6,
            },
          ]}>
          <Button
            title="Login"
            onPress={() => Alert.alert('Login Button pressed')}
          />
          <Text style={styles.or}>OR</Text>
          <Button
            title="Register"
            onPress={() => Alert.alert('Registeration Button pressed')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 22,
    borderWidth: 1,
  },
  heading: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 33,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: 'blue',
  },
  or: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 8,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },

  container: {
    padding: 19,
    marginTop: 133,
  },
});
export default App;
