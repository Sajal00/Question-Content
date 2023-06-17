import React, {useState, useEffect, useRef} from 'react';

import {StyleSheet, Text, View, Dimensions} from 'react-native';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Splash = props => {
  useEffect(() => {
    // runOneSignal();
    setTimeout(() => {
      props.navigation.replace('homeNavigator');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <View style={styles.logospace}>
          <Text>Logo</Text>
        </View>
        <View>
          <Text style={styles.companyname}>Company name</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Deviceheight,
    width: Devicewidth,
    backgroundColor: 'purple',
    justifyContent: 'center',
  },
  innercontainer: {
    height: Deviceheight / 1.6,
    width: Devicewidth / 1.2,
    flexDirection: 'column',
    backgroundColor: 'blue',
    marginLeft: 30,
    justifyContent: 'space-evenly',
  },

  logospace: {
    height: Deviceheight / 3,
    width: Devicewidth / 1.5,
    backgroundColor: 'red',
    borderRadius: 130,
    justifyContent: 'center',
    marginLeft: 30,
  },
  companyname: {
    height: Deviceheight / 10,
    width: Devicewidth / 1.8,
    backgroundColor: 'white',
    marginLeft: 50,
  },
});
export default Splash;
