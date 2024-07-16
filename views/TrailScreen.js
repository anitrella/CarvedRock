import {
  StyleSheet,
  Image,
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useEffect, useState} from 'react';
import Header from '../components/Header';
import axios from 'axios';

const TrailItem = ({author, title, id, image}) => (
  <View style={styles.item}>
    <Text
      style={styles.title}
      onPress={() => navigation.navigate('TrailDetail')}>
      {title}
    </Text>
    <Image style={styles.trailImage} source={{uri: image}} />
    <Text style={styles.author}>By {author}</Text>
  </View>
);

const TrailScreen = ({route}) => {
  const {navigation} = route?.params;
  const [remoteData, setRemoteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const {data: reviews} = await axios.get(
        'http://192.168.15.234:3002/trailreviews',
      );
      setRemoteData(reviews);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
      console.log('DEBUG:: remoteData', remoteData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.reviewTitleRow}>
        <Text style={styles.reviewTitle}>Trail Review</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={remoteData}
          renderItem={({item}) => <TrailItem {...item} />}
          keyExtractor={item => item.id}
        />
      )}
      <Text style={styles.message}>LONGPRESS TO GO BACK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trailImage: {
    height: 200,
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 30,
    color: '#000000',
    alignSelf: 'center',
    paddingBottom: 15,
  },
  input: {
    alignSelf: 'center',
    borderWidth: 1,
    width: 300,
    height: 40,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    fontFamily: 'OpenSans-Regular',
  },
  messageInput: {
    alignSelf: 'center',
    borderWidth: 1,
    width: 320,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    fontFamily: 'OpenSans-Regular',
    marginBottom: 10,
  },
  submitButton: {
    width: '80%',
    backgroundColor: '#1ADE64',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    margin: 15,
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  cancelButton: {
    width: '80%',
    backgroundColor: '#F12748',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    margin: 15,
  },
});

export default TrailScreen;
