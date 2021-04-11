import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const AddToList = ({addItem}) => {
	const [text, setText] = useState('');

	const onChangeText = (textValue) => {
		setText(textValue)
	}

	return (
		<View>
			<TextInput placeholder='Agregar a la lista...' style={styles.input} onChangeText={onChangeText} value={text}></TextInput>
			<TouchableOpacity style={styles.btn} onPress={()=>{addItem(text); setText('')}}>
				<Icon name='add' size={20} color={'white'} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	input:{
		height: 60,
		padding: 15,
		fontSize: 16,
		backgroundColor: 'white'
	},
	btn:{
		backgroundColor: '#9513d1',
		padding: 15,
		margin: 5,
		alignItems: 'center',
	},
});

export default AddToList;