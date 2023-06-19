import React from 'react';
// import {Text, View} from 'react-native';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Reactnative from './reactnative';
import Reactjs from './reactjs';
import Nodejs from './nodejs';
const Tab = createMaterialBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator initialRouteName="reactnative">
      <Tab.Screen
        name="reactnative"
        component={Reactnative}
        options={{
          tabBarLabel: 'ReactNative',
        }}
      />
      <Tab.Screen
        name="reactJs"
        component={Reactjs}
        options={{
          tabBarLabel: 'React',
        }}
      />
      <Tab.Screen
        name="nodeJs"
        component={Nodejs}
        options={{
          tabBarLabel: 'Node',
        }}
      />
    </Tab.Navigator>
  );
}

// function Home() {
//   return (
//     <View>
//       <Text>its home screen</Text>
//     </View>
//   );
// }
export default Home;
