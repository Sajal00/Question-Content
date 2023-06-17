import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import MyModal from '../Component/modal';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Reactnative = () => {
  const [selectedQuestion, setStateselectedQuestion] = useState('');

  const [showModal, setShowModal] = useState(false);
  const modalClose = () => setShowModal(false);

  const handleViewDetails = id => {
    console.log('this my data set', id);
    setStateselectedQuestion(id);
    setShowModal(true);
  };

  const Mydata = [
    {
      id: 1,
      name: 'Question 1 React Native',
      content:
        "Question 1 React Native ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      name: 'Question 5 React Native',
      content:
        "Question 5 React Native ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      name: 'Question 2 React Native',
      content:
        "Question 2 React Native ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      name: 'Question 3 React Native',
      content:
        "Question 3 React Native ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 5,
      name: 'Question 4 React Native',
      content:
        "Question 4 React Native ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <View style={styles.container}>
      <MyModal
        show={showModal}
        close={modalClose}
        cameFrom={selectedQuestion}
      />
      <FlatList
        data={Mydata}
        renderItem={({item}) => (
          <View style={{elevation: 5}}>
            <Text>{item.name}</Text>
            <Text numberOfLines={1}>{item.content}</Text>
            <TouchableOpacity
              style={{
                height: Devicewidth / 12,
                width: Devicewidth / 2,
                backgroundColor: 'yellow',
              }}
              onPress={() => handleViewDetails(item.id)}>
              <Text style={{color: 'black'}}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // height: Deviceheight,
    // width: Devicewidth,
    // backgroundColor: 'purple',
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default Reactnative;
