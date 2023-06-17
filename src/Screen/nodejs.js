import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
  Button,
} from 'react-native';
import MyModal from '../Component/modal';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Nodejs = () => {
  const [showModal, setShowModal] = useState(false);
  const modalClose = () => setShowModal(false);

  const handleViewDetails = () => {
    setShowModal(true);
  };
  const data = [
    {
      name: 'Question 1 NodeJs',
      content:
        "Question 1 NodeJs  ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: 'Question 5 NodeJs ',
      content:
        "Question 5 NodeJs  ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: 'Question 2 NodeJs ',
      content:
        "Question 2 NodeJs  ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: 'Question 3 NodeJs ',
      content:
        "Question 3 NodeJs  ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: 'Question 4 NodeJs ',
      content:
        "Question 4 NodeJs  ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          height: Devicewidth / 8,
          width: Devicewidth / 0.8,
          backgroundColor: 'yellow',
        }}
        onPress={handleViewDetails}>
        <Text style={{color: 'black'}}>View Details</Text>
      </TouchableOpacity>
      <MyModal show={showModal} close={modalClose} cameFrom={'Nodejs'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // height: Deviceheight,
    // width: Devicewidth,
    backgroundColor: 'purple',
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default Nodejs;
