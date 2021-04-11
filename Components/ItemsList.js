import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const ItemsList = ({item, deleteItem}) => {

const [purchased, setPurchased] = useState(false);

	const purchasedItem = () => {
		setPurchased(true);
	}

	const cancelPurchasedItem = () => {
		setPurchased(false);
	}

	return (
		<TouchableOpacity style={styles.listItem}>
			<View style={styles.listItemView}>
				<Text style={styles.listItemText}>{item.name}</Text>
				<View style={styles.icons}>
				{purchased && <Icon name='done' size={20} color={'green'} onPress={cancelPurchasedItem} />}
				{!purchased && <Icon name='done' size={20} color={'black'} onPress={purchasedItem} />}
				<Icon name='delete' size={20} color={'red'} onPress={() => deleteItem(item.id)}/>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem:{
		padding: 15,
		backgroundColor: 'white',
	},
	listItemView:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	listItemText:{
		fontSize: 18,
	},
	icons:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default ItemsList;