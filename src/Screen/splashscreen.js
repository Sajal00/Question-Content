import React, {useState, useEffect, useRef} from 'react';

import {StyleSheet, Text, View, Dimensions} from 'react-native';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('homeNavigator');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.companyname}>WellCome to</Text>
        <Text style={styles.app}>Simple App</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Deviceheight,
    width: Devicewidth,
    // backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },

  companyname: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
  },
  app: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
});
export default Splash;
