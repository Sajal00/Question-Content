import React, {useState} from 'react';
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

const Nodejs = () => {
  const [selectedQuestion, setStateselectedQuestion] = useState('');
  const [showModal, setShowModal] = useState(false);
  const modalClose = () => setShowModal(false);

  const handleViewDetails = id => {
    // console.log('this my data set', id);
    setStateselectedQuestion(id);
    setShowModal(true);
  };
  const handleshowmore = id => {
    console.log('showmore button clicked');
  };

  const MyNodejsdata = [
    {
      id: 11,
      name: 'Question 11 NodeJs',
      content:
        "Question 11 NodeJs  ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 22,
      name: 'Question 22 NodeJs ',
      content:
        "Question 22 NodeJs  ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 33,
      name: 'Question 33 NodeJs ',
      content:
        "Question 33 NodeJs  ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 44,
      name: 'Question 44 NodeJs ',
      content:
        "Question 44 NodeJs  ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 55,
      name: 'Question 55 NodeJs ',
      content:
        "Question 55 NodeJs  ---->Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <View style={styles.body}>
      <MyModal
        show={showModal}
        close={modalClose}
        cameFrom={selectedQuestion}
      />
      <FlatList
        data={MyNodejsdata}
        renderItem={({item}) => (
          <View
            style={{
              elevation: 2,
              marginHorizontal: 10,
              marginVertical: 5,
              borderRadius: 10,
              // justifyContent: 'center',
              // alignItems: 'center',
              backgroundColor: '#fff',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'left',
                color: '#000',
                marginBottom: 2,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'left',
                color: '#000',
                marginBottom: 2,
              }}
              numberOfLines={2}>
              {item.content}
            </Text>
            <TouchableOpacity
              style={{
                height: Deviceheight / 24,
                width: Devicewidth / 3.5,
                backgroundColor: '#989ab5',
                justifyContent: 'center',
                borderRadius: 360,
                marginVertical: 5,
                alignItems: 'center',
              }}
              onPress={() => handleViewDetails(item.id)}>
              <Text style={{color: 'black'}}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={{
          height: Deviceheight / 22,
          width: Devicewidth / 3.5,
          backgroundColor: '#adb1f7',
          justifyContent: 'center',
          borderRadius: 10,
          marginVertical: 5,
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 10,
        }}
        onPress={() => handleshowmore()}>
        <Text style={{color: 'black', fontSize: 14, fontWeight: 500}}>
          Show more
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default Nodejs;
