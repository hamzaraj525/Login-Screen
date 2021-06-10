import React, {Component} from 'react';
import {Appbar} from 'react-native-paper';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Alert,
  useColorScheme,
  View,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      nameValidate: true,
      passwordValidate: true,
      password: '',
    };
  }

  validate(text, type) {
    alph = /^[a-zA-Z]+$/;
    num = /^[0-9]+$/;
    if (type == 'username') {
      if (alph.test(text)) {
        this.setState({
          nameValidate: true,
        });
      } else {
        this.setState({
          nameValidate: false,
        });
      }
    } else if (type == 'password') {
      if (num.test(text)) {
        this.setState({
          passwordValidate: true,
        });
      } else {
        this.setState({
          passwordValidate: false,
        });
      }
    }
  }
  render() {
    return (
      <View>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Login" />
        </Appbar.Header>

        <View style={styles.container}>
          <Text style={styles.heading}>Login Screen</Text>
          <TextInput
            style={[
              styles.input,
              !this.state.nameValidate ? styles.error : null,
            ]}
            onChangeText={text => this.validate(text, 'username')}
            placeholder="Username"
          />
          <TextInput
            style={[
              styles.input,
              !this.state.passwordValidate ? styles.error : null,
            ]}
            onChangeText={text => this.validate(text, 'password')}
            placeholder="Password"
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
  }
}

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
  error: {
    borderWidth: 4,
    borderColor: 'red',
  },
});
