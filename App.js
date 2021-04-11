import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './Components/Header';
import ItemsList from './Components/ItemsList';
import AddToList from './Components/AddToList';

const App = () => {

  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (name) => {
    if (name == '') {
      Alert.alert ('Ocurrió un error', 'Por favor ingresar un valor válido'), {text: 'Ok'}
    } else {
      setItems(prevItems => {
      return [{id: Math.random().toString(), name:name}, ...prevItems];
      })
      }
    }


  return (
    <View style={styles.container}>
      <Header/>
      <FlatList data={items} renderItem={({item}) => (<ItemsList item={item} deleteItem={deleteItem} />)} />
      <AddToList addItem={addItem}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default App;