import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';

import {styles} from './styles';

const Main = (): JSX.Element => {
  return (
    <>
      <Header headerTitle="Task List" />
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </>
  );
};

export default Main;
