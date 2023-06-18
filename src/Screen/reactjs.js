import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
  Button,
  FlatList,
  Linking,
} from 'react-native';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const ReactJs = () => {
  // const [selectedQuestion, setStateselectedQuestion] = useState('');
  const [reactNativeQuestion, setreactNativeQuestion] = useState([]);
  const [questionList, setQuestionlist] = useState([]);

  const handleViewDetails = data => {
    Linking.openURL(data);
  };
  const handleshowmore = () => {
    const items = questionList;
    let displayedItems = reactNativeQuestion?.length;
    const itemsPerClick = 10;
    if (displayedItems + itemsPerClick <= items.length) {
      displayedItems += itemsPerClick;
    } else {
      displayedItems = items.length;
    }
    const currentDisplay = items.slice(0, displayedItems);
    setreactNativeQuestion(currentDisplay);
  };

  const getAPIdata = async () => {
    const url =
      'https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow';
    let result = await fetch(url);
    result = await result.json();

    let questions = result?.items;
    setQuestionlist(questions);
    let questiontoshow = [];
    if (questions.length >= 10) {
      questiontoshow = questions.slice(0, 10);
    } else {
      questiontoshow = questions.slice(0, questions.length);
    }
    setreactNativeQuestion(questiontoshow);
  };
  useEffect(() => {
    getAPIdata();
  }, []);

  return (
    <View style={styles.body}>
      <FlatList
        data={reactNativeQuestion}
        renderItem={({item}) => (
          <View style={styles.questionContainer}>
            <Text style={styles.questionTitle}>{item?.title}</Text>
            <TouchableOpacity
              style={styles.questionDetails}
              onPress={() => handleViewDetails(item?.link)}>
              <Text style={{color: 'black'}}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.showMoreButton}
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
  questionContainer: {
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 7,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  questionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000',
    marginBottom: 2,
  },
  questionDetails: {
    height: Deviceheight / 24,
    width: Devicewidth / 3.5,
    backgroundColor: '#989ab5',
    justifyContent: 'center',
    borderRadius: 360,
    marginVertical: 5,
    alignItems: 'center',
  },
  showMoreButton: {
    elevation: 3,
    height: Deviceheight / 22,
    width: Devicewidth / 3.5,
    backgroundColor: '#adb1f7',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default ReactJs;
