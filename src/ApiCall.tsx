import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ApiCall = () => {
  const navigation = useNavigation();
  const [fetchResponse, setfetchResponse] = useState([]);

  const fetchCall = async () => {
    const url = 'https://mocki.io/v1/cf72bc84-93e8-46e4-bd79-b7806d08a67a';
    const urlReponse = await fetch(url);
    const jsonParse = await urlReponse.json();
    setfetchResponse(jsonParse);
  };

  useEffect(() => {
    fetchCall();
  }, []);

  const flatlistRender = ({ item }) => {
    return (
      <View style={styles.userRow}>
        <View>
          <View style={[styles.avatar, { borderRadius: 25 }]}>
            <ImageBackground
              source={{ uri: item.avatar }}
              style={{ width: 50, height: 50 }}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.nameText}>
            {item.first_name} {item.last_name}
          </Text>
          <Text>{item.email}</Text>
          <View style={styles.viewProfile}>
            <Text></Text>
            <TouchableOpacity>
              <Text>View Profile {'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const headerRender = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Users List</Text>
    </View>
  );

  const footerRender = () => (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Text style={styles.adduserText}>+ Add User</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainView}>
      <FlatList
        data={fetchResponse.data}
        keyExtractor={item => item.id.toString()}
        renderItem={flatlistRender}
        ListHeaderComponent={headerRender}
        ListFooterComponent={footerRender}
        style={{ borderRadius: 10, elevation: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ApiCall;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2183F6',
    paddingHorizontal: 30,
    paddingVertical: 25,
    alignItems: 'center',
  },
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#3698FE',
    padding: 15,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  footer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  userRow: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomColor: '#E6EDF1',
    borderBottomWidth: 1,
    columnGap: 15,
  },
  adduserText: {
    color: '#1D262A',
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: '#000002',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewProfile: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
